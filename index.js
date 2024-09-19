#!/usr/bin/env node
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import { pluginQuestion } from "./questions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readFile(filePath) {
	const fullPath = path.resolve(__dirname, filePath);
	return fs.readFileSync(fullPath, { encoding: "utf8" });
}

inquirer.prompt(pluginQuestion).then((answer) => {
	if (answer.customPlugin === "Yes") {
		const pluginFileContent = readFile("tailwind.plugin.js");
		fs.writeFileSync("tailwind.plugin.js", pluginFileContent);
		console.log("Plugin file created successfully");
	}
});
