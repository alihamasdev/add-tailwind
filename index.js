#!/usr/bin/env node
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { pluginQuestion, prettierQuestion } from "./questions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const devInstallCommand = "npm install --save-dev";
const tailwindDependencies = "tailwindcss postcss autoprefixer";
const prettierDependencies = "prettier prettier-plugin-tailwindcss";

function readFile(filePath) {
	const fullPath = path.resolve(__dirname, filePath);
	return fs.readFileSync(fullPath, { encoding: "utf8" });
}

const configFileContent = readFile("tailwind.config.js");
fs.writeFileSync("tailwind.config.js", configFileContent);
console.log("Successfully created tailwind.config.js file");

let isPrettier = "";

await inquirer.prompt(pluginQuestion).then((answer) => {
	if (answer.customPlugin === "Yes") {
		const pluginFileContent = readFile("tailwind.plugin.js");
		fs.writeFileSync("tailwind.plugin.js", pluginFileContent);
		console.log("Successfully created tailwind.plugin.js file");
	}
});
await inquirer.prompt(prettierQuestion).then((prettierAnswer) => {
	if (prettierAnswer.prettier === "Yes") {
		const prettierFileContent = readFile("prettierrc.json");
		fs.writeFileSync(".prettierrc", prettierFileContent);
		console.log("Successfully created .prettierrc file");
		isPrettier = prettierDependencies;
	}
});

console.log("Installing dependencies...");

try {
	const selectedDependencies = `${devInstallCommand} ${tailwindDependencies} ${isPrettier}`;
	console.log(selectedDependencies);
	execSync(selectedDependencies, { stdio: "inherit" });
	console.log("Successfully installed latest dependencies");
} catch (error) {
	console.error("Failed to install dependencies. Try manually installing dependencies with :");
	console.error(selectedDependencies);
}
