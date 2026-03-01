# Build the Next.js static export
FROM node:20-alpine AS builder

RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /app
# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy source and build the static output
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Serve the static files via NGINX mapping to Port 3310
FROM nginx:alpine AS runner

# Copy the static export (`out` folder) to the Nginx html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Replace the default Nginx config to listen on 3310 (matching docker-compose)
RUN echo "server { \
    listen 3310; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri.html \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

EXPOSE 3310
CMD ["nginx", "-g", "daemon off;"]
