# ParallaxMD

ParallaxMD is a lightweight, high-performance Windows Markdown editor. It features a seamless side-by-side split pane layout, allowing you to view and edit raw Markdown and a fully rendered, Typora-like WYSIWYG interface simultaneously.

## Features

* **Dual-Lens Editing:** Edit in raw Markdown, visually block-by-block, or both side-by-side in real-time.
* **Typora-Style WYSIWYG:** A distraction-free, rich-text experience powered by Milkdown.
* **Native Windows Feel:** Built specifically for Windows using WebView2 for a minimal memory footprint and lightning-fast load times.
* **Live Diagram Rendering:** Full, out-of-the-box support for rendering complex Mermaid.js diagrams directly in the preview pane.
* **Local & Secure:** Operates entirely on your local machine with strict, opt-in file system access. 

## Tech Stack

ParallaxMD is built with a modern, hybrid desktop architecture:

* **Desktop Framework:** [Tauri v2](https://v2.tauri.app/) (Rust Backend / Native WebView2)
* **Frontend UI:** [Next.js](https://nextjs.org/) (Strictly configured for Static Export)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Raw Editor Engine:** CodeMirror 6
* **WYSIWYG Engine:** Milkdown (ProseMirror)

## Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Rust](https://www.rust-lang.org/tools/install)
* Windows SDK and C++ Build Tools (Required for Tauri on Windows)

### Installation

1. Clone the repository:

```bash
   git clone [https://github.com/yourusername/parallax-md.git](https://github.com/yourusername/parallax-md.git)
   cd parallax-md

```

2. Install frontend dependencies:

```bash
npm install

```


3. Run the development environment:

```bash
npm run tauri dev

```


*Note: The first time you run this command, the Rust compiler will take a few minutes to build the backend. Subsequent builds will be significantly faster.*

## Project Structure

* `/src`: Contains the Next.js frontend, UI components, and the React state logic connecting the editors.
* `/src-tauri`: Contains the Rust backend, Tauri configuration (`tauri.conf.json`), and system-level API permissions.

## License

MIT License

