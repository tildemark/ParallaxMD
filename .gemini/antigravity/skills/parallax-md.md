# Project: ParallaxMD
**Description:** A lightweight, dual-pane Windows Markdown editor (Raw + WYSIWYG) built with Tauri.
**Goal:** Create a high-performance Typora alternative with seamless split-view syncing and Mermaid support.

---

## 1. AI Context Injection (The Master Prompt)
*Copy and paste this into a fresh AI session (Copilot, Gemini, etc.) to resume work.*

```markdown
# Role
You are an expert desktop application engineer specializing in Tauri v2, Next.js, and complex rich-text editing interfaces.

# Project Context
We are building a native Windows Markdown editor named "ParallaxMD". The app features a side-by-side split pane layout. One pane is a raw Markdown editor, and the other pane is a block-based WYSIWYG editor (similar to Typora). The two panes must stay perfectly synced in real-time. 

# Tech Stack & Libraries
- Desktop Wrapper: Tauri v2 (Rust backend, Windows WebView2 frontend)
- Frontend Framework: Next.js (App Router, strictly configured for static export)
- Language: TypeScript (Strict mode enabled)
- Styling: Tailwind CSS
- Raw Markdown Engine: CodeMirror 6
- WYSIWYG Engine: Milkdown (built on ProseMirror)
- Diagram Support: Mermaid.js (integrated into Milkdown to render live)

# Architectural Constraints & Rules
1. **Static Export Strictness:** Next.js is running locally inside a Tauri WebView. You must NEVER suggest Next.js Server Components, Server Actions, API routes (`/app/api/...`), or the `next/image` component. All frontend code must be strictly compatible with `output: 'export'`.
2. **State Management:** The "Source of Truth" for the document is the raw Markdown string. Updating the CodeMirror pane must instantly update the Milkdown pane, and vice-versa.
3. **File System Access:** Always use Tauri's official `@tauri-apps/plugin-fs` and `@tauri-apps/plugin-dialog` plugins for reading, saving, and opening `.md` files on the local Windows file system. Do not ever use Node.js `fs` modules.
4. **Styling:** Keep the UI minimalist, distraction-free, and clean. Use CSS Grid or Flexbox combined with Tailwind for the resizable split-pane layout.

# Task Execution
When asked to write, scaffold, or refactor code:
1. Think step-by-step about how the state syncs between the two editors before writing the component logic.
2. Always provide the exact file path (e.g., `src/app/page.tsx`) at the top of your code blocks.
3. Only write code that directly addresses the user's prompt.

```

---

## 2. Technical Blueprint

### The Stack

| Component | Technology | Reasoning |
| --- | --- | --- |
| **Wrapper** | Tauri v2 | Low RAM (<50MB), tiny installer (~6MB), native speed. |
| **Frontend** | Next.js + Tailwind | Modern component architecture, rapid styling. |
| **Editor A** | CodeMirror 6 | Best-in-class syntax highlighting for raw markdown. |
| **Editor B** | Milkdown | Headless WYSIWYG (ProseMirror) that handles structure/parsing. |
| **Syncing** | React State | Centralized string state pushes updates to both editors. |

### Configuration Rules

1. **Next.js Config:** Must have `output: 'export'` and `images: { unoptimized: true }`.
2. **Tauri Permissions:** Must whitelist `fs` (read/write) and `dialog` (open/save) in `src-tauri/capabilities/default.json`.
3. **Icons:** Single 1024x1024 PNG required for `npm run tauri icon`.

### Visual Identity

* **Name:** ParallaxMD
* **Icon Concept:** "Eclipse/Parallax" — Two overlapping geometric circles (Code + Visual) with a glowing, high-contrast intersection.
* **Theme:** Dark mode by default, minimalist, distraction-free.

### View Mode Settings

* **View Modes:** Three modes — `markdown` (raw only), `wysiwyg` (visual only), `dual` (split pane).
* **Mode Switcher Style (configurable in Settings):**
  * `floating-pill` *(default)* — A compact pill/tab switcher that floats at the bottom-center of the screen, like Typora's mode toggle.
  * `top-bar` — A full toolbar rendered at the top of the window.
* **Persistence:** The user's chosen mode AND switcher style are saved to `localStorage` and restored on app launch.
* **Settings Location:** A `⚙` settings panel (accessible via toolbar or keyboard shortcut `Ctrl+,`) exposes UI preferences including the switcher style toggle.

---

## 3. Quick Setup Reference

**Initialization:**

```bash
# 1. Create Project
npx create-tauri-app@latest
# Name: parallax-md
# Language: TypeScript / JavaScript
# UI Template: Next.js
# UI Flavor: TypeScript

# 2. Config Next.js (next.config.mjs)
# Add: output: 'export', images: { unoptimized: true }

# 3. Install Dependencies
npm install
npm install @codemirror/lang-markdown @codemirror/view @uiw/react-codemirror
npm install @milkdown/core @milkdown/ctx @milkdown/preset-commonmark @milkdown/theme-nord @milkdown/react
npm install react-split

```

**Running Development:**

```bash
npm run tauri dev

```

**Building for Windows:**

```bash
npm run tauri build

```
