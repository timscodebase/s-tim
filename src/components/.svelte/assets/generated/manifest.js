import * as layout from "/_app/assets/components/layout.svelte";

const components = [
	() => import("/_app/routes/index.svelte"),
	() => import("/_app/routes/projects.svelte")
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