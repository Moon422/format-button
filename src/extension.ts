import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	const command = vscode.commands.registerCommand("formatButton.format", async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage("No active editor to format.");
			return;
		}
		await vscode.commands.executeCommand("editor.action.formatDocument");
	});

	context.subscriptions.push(command);

	const button = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		100
	);

	button.text = "$(broom) Format";
	button.command = "formatButton.format";
	button.tooltip = "Format Document";
	button.show();

	context.subscriptions.push(button);
}

export function deactivate() { }
