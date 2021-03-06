import './PageWrapper.css.proxy.js';
/* src/components/PageWrapper.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	create_slot,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out,
	update_slot
} from "../web_modules/svelte/internal.js";

import Header from "./Header.js";
import Footer from "./Footer.js";
import Separator from "./Separator.js";

function create_fragment(ctx) {
	let div;
	let header;
	let t0;
	let separator;
	let t1;
	let t2;
	let footer;
	let current;
	header = new Header({});
	separator = new Separator({});
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);
	footer = new Footer({});

	return {
		c() {
			div = element("div");
			create_component(header.$$.fragment);
			t0 = space();
			create_component(separator.$$.fragment);
			t1 = space();
			if (default_slot) default_slot.c();
			t2 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(header.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			claim_component(separator.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			if (default_slot) default_slot.l(div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(footer.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "bodyWrapper svelte-1bvkf99");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(header, div, null);
			append(div, t0);
			mount_component(separator, div, null);
			append(div, t1);

			if (default_slot) {
				default_slot.m(div, null);
			}

			append(div, t2);
			mount_component(footer, div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(separator.$$.fragment, local);
			transition_in(default_slot, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(header.$$.fragment, local);
			transition_out(separator.$$.fragment, local);
			transition_out(default_slot, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(header);
			destroy_component(separator);
			if (default_slot) default_slot.d(detaching);
			destroy_component(footer);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class PageWrapper extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default PageWrapper;
//# sourceMappingURL=PageWrapper.js.map
