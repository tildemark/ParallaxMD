# Changelog

All notable changes to **ParallaxMD** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-03-01

### Fixed
- Reverted visual editor task lists to gracefully fallback to standard bullet strings to resolve underlying Milkdown checkmark DOM-syncing issues.
- Addressed Tailwind CSS typography plugin specificity conflicts.

### Changed
- Replaced the three separate Title Bar theme buttons with a single unified light/dark toggle component.
- Added the ParallaxMD logo icon directly to the Title Bar next to the application text.
- Added a new Editor Shortcuts reference table detailing Visual Editor combinations (Ctrl+B, etc.) to the Markdown Cheatsheet.

## [0.1.0] - 2026-03-01

### Added
- **Two-Way Editor Sync**: Implemented seamless synchronization between CodeMirror (Raw Markdown) and Milkdown (Visual Editor) without cursor jumping.
- **Enhanced Markdown Support**: Added GitHub Flavored Markdown (GFM) support for tables, strikethrough, and task lists.
- **Mermaid Diagrams**: Integrated `@xiangfa/milkdown-plugin-diagram` for native Mermaid flowchart and timeline support.
- **Native Windows UI**: 
  - Added a custom title bar with minimize, maximize, and close controls.
  - Implemented draggable window regions (`data-tauri-drag-region`).
- **Theming System**: 
  - Added Light Mode and Dark Mode.
  - Added a "Transparent" Mica-effect theme specifically tuned for Windows 11.
  - Included a Title Bar dropdown to switch between themes instantly.
- **About/Help Dialog**: Added an interactive modal providing versioning and author attribution details.
- **Packaging Utilities**: Configured Tauri to bundle both portable `.exe` standalone files and `.msi` system installers.
