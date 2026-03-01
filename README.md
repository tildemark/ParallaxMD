# ParallaxMD

ParallaxMD is a modern, native Windows desktop Markdown editor built with Tauri, Next.js, and Tailwind CSS. It features a side-by-side synchronized editing experience using CodeMirror for raw markdown input and Milkdown for a rich visual rendering.

## Features
- **Two-Way Sync**: Type in the raw editor or format in the visual editor; they stay perfectly in sync without cursor jumps.
- **Enhanced Markdown**: Supports GitHub Flavored Markdown (GFM) including tables, task lists, and strikethrough.
- **Mermaid Diagrams**: Create advanced flowcharts and diagrams natively using Mermaid syntax in the raw editor.
- **Native Windows UI**: 
  - Custom Title Bar with minimize, maximize, and close controls.
  - Interactive Help Dropdown Menu with Markdown Cheatsheet and System Info.
- **Theming System**: 
  - Switch instantly between Light Mode, Dark Mode, and a Translucent Mica Mode specifically tuned for Windows 11.

---

## Prerequisites

ParallaxMD is a native desktop application powered by **Tauri**. Because Tauri applications use a Rust backend for the windowing system, **you must have Rust and Cargo installed on your machine** to build and run the app.

1. Install **Node.js** (v18 or higher)
2. Install **Rust and Cargo**:
   - Head over to [Rustup](https://rustup.rs/) and download the `rustup-init.exe` installer for Windows.
   - Run the installer and follow the default prompts.
   - You may also need to install the **C++ build tools for Visual Studio 2022** if prompted by the Rust installer.
3. Restart your terminal or computer after installing Rust.

---

## Getting Started

1. Install Node dependencies:
   ```bash
   npm install
   ```

2. **Run the Marketing Web Demo** (Browser Only):
   If you only want to work on or preview the Marketing Landing Page on `localhost:3000` (which skips the Rust backend), run:
   ```bash
   npm run dev
   ```

3. **Run the Native Windows App**:
   To test the actual desktop application with native OS features and Rust performance, run:
   ```bash
   npm run tauri dev
   ```
   This commands Tauri to boot Next.js in the background, compile the Rust backend, and launch the native desktop window directly into the Markdown Editor.

---

## Updating Application Version

When you release a new version that aligns with your `CHANGELOG.md`, use the built-in npm commands to automatically sync `package.json` and `tauri.conf.json`:

```bash
# Bump the version (choose one based on the magnitude of the change)
npm version patch # e.g. 0.1.0 -> 0.1.1
npm version minor # e.g. 0.1.0 -> 0.2.0
npm version major # e.g. 0.1.0 -> 1.0.0

# Sync the new version into the Tauri configuration
npm run tauri version
```

---

## Building for Production

By default, ParallaxMD is configured to bundle both a standalone executable and an MSI installer.

To compile these Windows binaries:

```bash
npm run tauri build
```

Once the Rust compiler finishes its optimizations, the compiled binaries will be located inside the `src-tauri/target/release` directory.
- **Portable App**: `src-tauri/target/release/app.exe`
- **Installers**: `src-tauri/target/release/bundle/msi/` and `nsis/`
