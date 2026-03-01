# ParallaxMD Architecture

ParallaxMD is a modern desktop Markdown editor built using the **Tauri V2** framework, leveraging web technologies for its interface while providing native operating system integration through a Rust-based backend.

## System Overview

### The Backbone: Tauri V2
- ParallaxMD leverages **Tauri V2**, distinguishing it from heavier Electron-based applications by omitting the bundled Node.js Runtime and Chromium instance. 
- Instead, ParallaxMD uses the host's native WebView rendering engine (e.g., WebView2 on Windows) to display the frontend. This ensures ultra-lightweight binaries, fast startup times, and minimal RAM footprint.
- **Rust Backend (`src-tauri/`)**: The core entry point of the desktop application. This handles the security configuration, packaging (into `.exe` and `.msi`), and OS-level plugin execution (such as `tauri-plugin-os` which allows the application to directly query system architecture and versions).

### The Frontend: Next.js & React
- ParallaxMD uses a standard **React** web framework powered by **Next.js**. 
- The Next.js framework renders the view layer and performs Static Site Generation (SSG). 
- Because the entire interface runs within a `WebView`, the application can be seamlessly deployed not just as a Windows executable, but directly to a web server as an interactive web demo. 
- **Tailwind CSS**: Utility-first CSS framework responsible for styling the interface and adapting to the dynamic light/dark/transparent theming system.

---

## Component Architecture

### 1. Editor Synchronization Engine
ParallaxMD solves the complexities of dual-pane Markdown editing by bridging two distinct open-source web editor engines:

1. **CodeMirror (Raw Markdown Layer)**:
   - Found natively at `src/components/RawEditor.tsx`.
   - Handles strict text layout, raw input parsing, syntax highlighting, and Mermaid raw text composition.
   - Synchronizes raw document state (`doc`) outward to a shared state manager.

2. **Milkdown (Visual Presentation Layer)**:
   - Found natively at `src/components/VisualEditor.tsx`.
   - Uses a combination of `remark` and `prosemirror` to present a rich, seamless WYSIWYG experience spanning GitHub Flavored Markdown (GFM), tables, lists, and rendered mermaid diagrams dynamically converted from the CodeMirror state stream.

### 2. Native System Control & UI Theming
Despite being a web-rendered interface, ParallaxMD feels fully native to the Windows ecosystem through careful UI architecture.

- **Title Bar Integration (`src/components/TitleBar.tsx`)**: The standard OS window chrome has been deliberately stripped out via `tauri.conf.json`, allowing the React application to paint its own header. The Title Bar uses explicit `@tauri-apps/api/window` Inter-Process Communications (IPC) commands to directly invoke native Minimize, Maximize, and Close routines.
- **Mica Effects (`globals.css`)**: By setting the background to absolute transparent values and enabling `"transparent": true` within the Tauri builder flags, the frontend instructs Windows 11 Desktop Window Manager to apply its native Mica blur rendering entirely underneath the webview canvas.

### 3. Progressive Degradation (Web Demo Version)
The `TitleBar` and `AboutDialog` contain environment-sensing checks leveraging `window.__TAURI_INTERNALS__`. 
When deployed to a high-availability web server as a demo, the application suppresses hardware-level API calls (which would crash in a standard browser) and removes the native window OS chrome (like Minimize/Maximize), ensuring the app dynamically converts from a deep-desktop utility into a beautiful web demo application seamlessly.
