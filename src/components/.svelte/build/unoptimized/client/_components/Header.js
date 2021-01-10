import './Header.css.proxy.js';
/* src/components/Header.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import Icon from "./Icon/Icon.js";
import Nav from "./Nav.js";
import Separator from "./Separator.js";
import { faCodepen, faDev, faGithub } from "../web_modules/@fortawesome/free-brands-svg-icons.js";

function create_fragment(ctx) {
	let main;
	let header;
	let section;
	let a0;
	let h1;
	let t0;
	let t1;
	let div5;
	let div4;
	let div0;
	let t2;
	let t3;
	let div1;
	let t4;
	let t5;
	let div2;
	let t6;
	let t7;
	let div3;
	let t8;
	let t9;
	let div6;
	let a1;
	let icon0;
	let t10;
	let a2;
	let icon1;
	let t11;
	let a3;
	let icon2;
	let t12;
	let separator;
	let t13;
	let nav;
	let current;
	icon0 = new Icon({ props: { icon: faCodepen } });
	icon1 = new Icon({ props: { icon: faDev } });
	icon2 = new Icon({ props: { icon: faGithub } });
	separator = new Separator({});
	nav = new Nav({});

	return {
		c() {
			main = element("main");
			header = element("header");
			section = element("section");
			a0 = element("a");
			h1 = element("h1");
			t0 = text("Tim Smith");
			t1 = space();
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			t2 = text("Web Developer");
			t3 = space();
			div1 = element("div");
			t4 = text("Photographer");
			t5 = space();
			div2 = element("div");
			t6 = text("Writer");
			t7 = space();
			div3 = element("div");
			t8 = text("Artist");
			t9 = space();
			div6 = element("div");
			a1 = element("a");
			create_component(icon0.$$.fragment);
			t10 = space();
			a2 = element("a");
			create_component(icon1.$$.fragment);
			t11 = space();
			a3 = element("a");
			create_component(icon2.$$.fragment);
			t12 = space();
			create_component(separator.$$.fragment);
			t13 = space();
			create_component(nav.$$.fragment);
			this.h();
		},
		l(nodes) {
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			header = claim_element(main_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			section = claim_element(header_nodes, "SECTION", {});
			var section_nodes = children(section);
			a0 = claim_element(section_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			h1 = claim_element(a0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Tim Smith");
			h1_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			t1 = claim_space(section_nodes);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t2 = claim_text(div0_nodes, "Web Developer");
			div0_nodes.forEach(detach);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t4 = claim_text(div1_nodes, "Photographer");
			div1_nodes.forEach(detach);
			t5 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "Writer");
			div2_nodes.forEach(detach);
			t7 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			t8 = claim_text(div3_nodes, "Artist");
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			section_nodes.forEach(detach);
			t9 = claim_space(header_nodes);
			div6 = claim_element(header_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);

			a1 = claim_element(div6_nodes, "A", {
				href: true,
				target: true,
				rel: true,
				class: true
			});

			var a1_nodes = children(a1);
			claim_component(icon0.$$.fragment, a1_nodes);
			a1_nodes.forEach(detach);
			t10 = claim_space(div6_nodes);

			a2 = claim_element(div6_nodes, "A", {
				href: true,
				target: true,
				rel: true,
				class: true
			});

			var a2_nodes = children(a2);
			claim_component(icon1.$$.fragment, a2_nodes);
			a2_nodes.forEach(detach);
			t11 = claim_space(div6_nodes);

			a3 = claim_element(div6_nodes, "A", {
				href: true,
				target: true,
				rel: true,
				class: true
			});

			var a3_nodes = children(a3);
			claim_component(icon2.$$.fragment, a3_nodes);
			a3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			header_nodes.forEach(detach);
			t12 = claim_space(main_nodes);
			claim_component(separator.$$.fragment, main_nodes);
			t13 = claim_space(main_nodes);
			claim_component(nav.$$.fragment, main_nodes);
			main_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "h1 svelte-ae2h47");
			attr(a0, "href", "/");
			attr(div0, "class", "element svelte-ae2h47");
			attr(div1, "class", "element svelte-ae2h47");
			attr(div2, "class", "element svelte-ae2h47");
			attr(div3, "class", "element svelte-ae2h47");
			attr(div4, "class", "inner svelte-ae2h47");
			attr(div5, "class", "carousel svelte-ae2h47");
			attr(a1, "href", "https://codepen.io/WebRuin");
			attr(a1, "target", "_blank");
			attr(a1, "rel", "noreferrer noopener");
			attr(a1, "class", "svelte-ae2h47");
			attr(a2, "href", "https://dev.to/tithos");
			attr(a2, "target", "_blank");
			attr(a2, "rel", "noreferrer noopener");
			attr(a2, "class", "svelte-ae2h47");
			attr(a3, "href", "https://github.com/timscodebase");
			attr(a3, "target", "_blank");
			attr(a3, "rel", "noreferrer noopener");
			attr(a3, "class", "svelte-ae2h47");
			attr(div6, "class", "socialIcons svelte-ae2h47");
			attr(header, "class", "secondaryHeader svelte-ae2h47");
		},
		m(target, anchor) {
			insert(target, main, anchor);
			append(main, header);
			append(header, section);
			append(section, a0);
			append(a0, h1);
			append(h1, t0);
			append(section, t1);
			append(section, div5);
			append(div5, div4);
			append(div4, div0);
			append(div0, t2);
			append(div4, t3);
			append(div4, div1);
			append(div1, t4);
			append(div4, t5);
			append(div4, div2);
			append(div2, t6);
			append(div4, t7);
			append(div4, div3);
			append(div3, t8);
			append(header, t9);
			append(header, div6);
			append(div6, a1);
			mount_component(icon0, a1, null);
			append(div6, t10);
			append(div6, a2);
			mount_component(icon1, a2, null);
			append(div6, t11);
			append(div6, a3);
			mount_component(icon2, a3, null);
			append(main, t12);
			mount_component(separator, main, null);
			append(main, t13);
			mount_component(nav, main, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(icon0.$$.fragment, local);
			transition_in(icon1.$$.fragment, local);
			transition_in(icon2.$$.fragment, local);
			transition_in(separator.$$.fragment, local);
			transition_in(nav.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon0.$$.fragment, local);
			transition_out(icon1.$$.fragment, local);
			transition_out(icon2.$$.fragment, local);
			transition_out(separator.$$.fragment, local);
			transition_out(nav.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(main);
			destroy_component(icon0);
			destroy_component(icon1);
			destroy_component(icon2);
			destroy_component(separator);
			destroy_component(nav);
		}
	};
}

class Header extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Header;
//# sourceMappingURL=Header.js.map