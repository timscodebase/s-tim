/* src/components/Icon/svg/Raw.svelte generated by Svelte v3.31.2 */
import { create_ssr_component } from "../../../web_modules/svelte/internal.js";

const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let cursor = 870711;

	function getId() {
		cursor += 1;
		return `fa-${cursor.toString(16)}`;
	}

	let raw;
	let { data } = $$props;

	function getRaw(data) {
		if (!data || !data.raw) {
			return null;
		}

		let rawData = data.raw;
		const ids = {};

		rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
			const uniqueId = getId();
			ids[id] = uniqueId;
			return ` id="${uniqueId}"`;
		});

		rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
			const id = rawId || pointerId;

			if (!id || !ids[id]) {
				return match;
			}

			return `#${ids[id]}`;
		});

		return rawData;
	}

	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	raw = getRaw(data);
	return `<g>${raw}</g>`;
});

export default Raw;
//# sourceMappingURL=Raw.js.map
