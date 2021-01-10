import './root.css.proxy.js';
/* .svelte/assets/generated/root.svelte generated by Svelte v3.31.2 */
import {
	create_ssr_component,
	escape,
	missing_component,
	validate_component
} from "../../../web_modules/svelte/internal.js";

import { setContext, afterUpdate, onMount } from "../../../web_modules/svelte.js";
import ErrorComponent from "../components/error.js";

const css = {
	code: "#svelte-announcer.svelte-q9sgi5{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}",
	map: "{\"version\":3,\"file\":\"root.svelte\",\"sources\":[\"root.svelte\"],\"sourcesContent\":[\"<!-- This file is generated by @sveltejs/kit — do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\timport ErrorComponent from \\\"/_app/assets/components/error.svelte\\\";\\n\\n\\t// error handling\\n\\texport let status = undefined;\\n\\texport let error = undefined;\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\n\\tconst Layout = components[0];\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title;\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<Layout {...(props_0 || {})}>\\n\\t{#if error}\\n\\t\\t<ErrorComponent {status} {error}/>\\n\\t{:else}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}/>\\n\\t{/if}\\n</Layout>\\n\\n{#if mounted}\\n\\t<div id=\\\"svelte-announcer\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\theight: 1px;\\n\\t\\toverflow: hidden;\\n\\t\\tposition: absolute;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AA0DC,iBAAiB,cAAC,CAAC,AAClB,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,AACX,CAAC\"}"
};

const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status = undefined } = $$props;
	let { error = undefined } = $$props;
	let { stores } = $$props;
	let { page } = $$props;
	let { components } = $$props;
	let { props_0 = null } = $$props;
	let { props_1 = null } = $$props;
	const Layout = components[0];
	setContext("__svelte__", stores);
	afterUpdate(stores.page.notify);
	let mounted = false;
	let navigated = false;
	let title = null;

	onMount(() => {
		const unsubscribe = stores.page.subscribe(() => {
			if (mounted) {
				navigated = true;
				title = document.title;
			}
		});

		mounted = true;
		return unsubscribe;
	});

	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
	if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
	if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0) $$bindings.props_0(props_0);
	if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0) $$bindings.props_1(props_1);
	$$result.css.add(css);

	$: {
		stores.page.set(page);
	}

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign(props_0 || {}), {}, {
		default: () => `${error
		? `${validate_component(ErrorComponent, "ErrorComponent").$$render($$result, { status, error }, {}, {})}`
		: `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`
	})}

${mounted
	? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-q9sgi5"}">${navigated ? `Navigated to ${escape(title)}` : ``}</div>`
	: ``}`;
});

export default Root;
//# sourceMappingURL=root.js.map