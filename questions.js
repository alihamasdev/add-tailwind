const pluginQuestion = [
	{
		type: "list",
		name: "customPlugin",
		message: "Do you want to add a custom tailwind plugin?",
		choices: ["Yes", "No"],
		default: true,
	},
];

const prettierQuestion = [
	{
		type: "list",
		name: "prettier",
		message: "Do you want to add a tailwind prettier plugin?",
		choices: ["Yes", "No"],
		default: true,
	},
];

export { pluginQuestion, prettierQuestion };
