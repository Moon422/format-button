# Welcome to Format Button Extension

## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file that declares the extension, command, and metadata.
  * The extension registers a command `formatButton.format` and defines its title. VS Code shows this command in the command palette.
* `src/extension.ts` - this is the main file where the extension logic is implemented.
  * The file exports an `activate` function that registers the `formatButton.format` command and creates a status bar button.
  * The command triggers the built-in `editor.action.formatDocument` command to format the active document.
  * A status bar item is created with a broom icon and bound to the format command.

## Setup

* Install dependencies:
  ```bash
  npm install
  ```
* Install the recommended extensions (amodio.tsl-problem-matcher, ms-vscode.extension-test-runner, and dbaeumer.vscode-eslint)

## Get up and running straight away

* Press `F5` to open a new Extension Development Host window with your extension loaded.
* The status bar button `$(broom) Format` will appear on the right side of the status bar.
* Click the button to format the active document, or run the command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Format Document via Button`.
* Set breakpoints in your code inside `src/extension.ts` to debug your extension.
* Find output from your extension in the debug console.

## Make changes

* You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.
* Alternatively, run the watch task to automatically rebuild on file changes:
  ```bash
  npm run watch
  ```


## Explore the API

* You can open the full set of VS Code API when you open the file `node_modules/@types/vscode/index.d.ts`.
* Learn more about the [VS Code Extension API](https://code.visualstudio.com/api).

## Run tests

* Install the [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* Run the "watch" task via the **Tasks: Run Task** command. Make sure this is running, or tests might not be discovered.
* Open the Testing view from the activity bar and click the "Run Test" button, or use the hotkey `Ctrl/Cmd + ; A`
* See the output of the test result in the Test Results view.
* Make changes to `src/test/extension.test.ts` or create new test files inside the `test` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.
  * You can create folders inside the `test` folder to structure your tests any way you want.

## Build for production

* Build a production package:
  ```bash
  npm run package
  ```
* This creates an optimized build in `dist/extension.js` using webpack.

## Go further

* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension) (already configured with webpack).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
