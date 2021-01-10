import * as layout from "../components/layout.js";

const components = [
	() => import("../../routes/index.js"),
	() => import("../../routes/projects.js")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// projects.svelte
		pattern: /^\/projects\/?$/,
		params: empty,
		parts: [components[1]]
	}
];

export const ignore = [
	
];

export { layout };