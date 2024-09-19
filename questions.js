const pluginQuestion = [
	{
		type: "list",
		name: "customPlugin",
		message: "Do you want to add a custom tailwind plugin?",
		choices: ["Yes", "No"],
	},
];

const prettierQuestion = [
	{
		type: "list",
		name: "prettier",
		message: "Do you want to add a tailwind prettier plugin?",
		choices: ["Yes", "No"],
	},
];

export { pluginQuestion, prettierQuestion };
