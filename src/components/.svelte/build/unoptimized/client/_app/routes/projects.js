/* src/routes/projects.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	query_selector_all,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../../web_modules/svelte/internal.js";

import PageWrapper from "../../_components/PageWrapper.js";
import Projects from "../../_components/Projects/Projects.js";

function create_default_slot(ctx) {
	let projects;
	let current;
	projects = new Projects({});

	return {
		c() {
			create_component(projects.$$.fragment);
		},
		l(nodes) {
			claim_component(projects.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(projects, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(projects.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(projects.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(projects, detaching);
		}
	};
}

function create_fragment(ctx) {
	let t;
	let main;
	let pagewrapper;
	let current;

	pagewrapper = new PageWrapper({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			t = space();
			main = element("main");
			create_component(pagewrapper.$$.fragment);
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ixqagr\"]", document.head);
			head_nodes.forEach(detach);
			t = claim_space(nodes);
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			claim_component(pagewrapper.$$.fragment, main_nodes);
			main_nodes.forEach(detach);
			this.h();
		},
		h() {
			document.title = "Projects | Tim Smith";
		},
		m(target, anchor) {
			insert(target, t, anchor);
			insert(target, main, anchor);
			mount_component(pagewrapper, main, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const pagewrapper_changes = {};

			if (dirty & /*$$scope*/ 1) {
				pagewrapper_changes.$$scope = { dirty, ctx };
			}

			pagewrapper.$set(pagewrapper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(pagewrapper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(pagewrapper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(t);
			if (detaching) detach(main);
			destroy_component(pagewrapper);
		}
	};
}

class Projects_1 extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Projects_1;
//# sourceMappingURL=projects.js.map
