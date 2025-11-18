# Format Button

A lightweight Visual Studio Code extension that adds a status-bar button to trigger document formatting with a single click.

## Description

`format-button` provides a small, convenient status bar item labeled "Format" (with a broom icon) that runs the built-in VS Code document formatter for the active editor. It is useful when you want an always-visible one-click formatter without using the command palette or keyboard shortcuts.

## Features

- Adds a status bar button: `$(broom) Format`
- Runs the `editor.action.formatDocument` command on the active editor
- Shows an information message when no editor is active

## Requirements

- Visual Studio Code compatible with the extension engine version declared in `package.json`.

## Installation (for development)

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Build the extension (or run the watcher during development):

```bash
npm run compile      # build once via webpack
npm run watch        # rebuild on file changes
```

4. Launch the extension host from VS Code (Run > Start Debugging) or use the VS Code Extension Development Host.

## Usage

- Open any text file supported by a formatter (e.g. TypeScript, JavaScript, JSON).
- Click the `$(broom) Format` status bar button at the right of the status bar.
- If a formatter is available for the file type, the document will be formatted; otherwise VS Code will prompt or do nothing depending on your formatter setup.

There is also a command contributed if you prefer the command palette: `Format Document via Button` (command id: `formatButton.format`).

## Scripts

- `npm run compile` — build the extension using `webpack`.
- `npm run watch` — build in watch mode.
- `npm run package` — build a production package.
- `npm run compile-tests` / `npm run watch-tests` — compile TypeScript tests.
- `npm test` — run tests (hooks into `vscode-test`).

See `package.json` for the full list of scripts.

## Development Notes

- The extension registers a command `formatButton.format` in `src/extension.ts` which invokes the built-in `editor.action.formatDocument` command and creates a status bar item bound to that command.
- The status bar item is created with `vscode.window.createStatusBarItem` and shown immediately on activation.

## Testing

- Tests are set up under `test/` and rely on VS Code test utilities. Run:

```bash
npm run pretest
npm test
```

## Publishing

- Follow the usual VS Code Marketplace publishing flow (use `vsce` or `npm` scripts you prefer). Build with `npm run package` before publishing.

## Contributing

- Bug reports and pull requests are welcome. Please open issues describing the problem and include steps to reproduce.

## License

Specify your license here (e.g. MIT). Replace this line with the actual license text or a reference.

---

If you'd like, I can also add a `CONTRIBUTING.md`, update `package.json` publisher metadata, or add CI for tests and packaging. What would you like next?