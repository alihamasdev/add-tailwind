import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";

const customPlugin = plugin(function ({ addUtilities, addBase, theme }) {
	addUtilities({
		".btn": {
			fontWeight: 700,
			fontSize: "15px",
			minHeight: "32px",
			cursor: "pointer",
			borderWidth: "1px",
			textAlign: "center",
			paddingLeft: "16px",
			paddingRight: "16px",
			borderStyle: "solid",
			borderRadius: "9999px",
			transition: "all 0.2s linear",
		},
		".absolute-center": {
			top: "50%",
			left: "50%",
			position: "absolute",
			transform: "translate(-50%, -50%)",
		},
		".fixed-center": {
			top: "50%",
			left: "50%",
			position: "fixed",
			transform: "translate(-50%, -50%)",
		},
		".flex-center": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	}),
		addBase({});
});

export default customPlugin;
