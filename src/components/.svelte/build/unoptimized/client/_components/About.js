import './About.css.proxy.js';
/* src/components/About.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from "../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let div2;
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;

	return {
		c() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("A little about me");
			t1 = space();
			p = element("p");
			t2 = text("My passion in life is meeting new people and learning as much as I\n        can about the many things I love! ❤️ Every day, I find new inspiring\n        things that motivate me to keep moving forward and to continue my\n        search for my purpose. I believe that my Higher Power put me on this\n        Earth to learn and inspire people to love life as I do.");
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "A little about me");
			h2_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "My passion in life is meeting new people and learning as much as I\n        can about the many things I love! ❤️ Every day, I find new inspiring\n        things that motivate me to keep moving forward and to continue my\n        search for my purpose. I believe that my Higher Power put me on this\n        Earth to learn and inspire people to love life as I do.");
			p_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "textWrapper svelte-uc9rnb");
			attr(div1, "class", "image svelte-uc9rnb");
			attr(div2, "class", "about svelte-uc9rnb");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, div0);
			append(div0, h2);
			append(h2, t0);
			append(div0, t1);
			append(div0, p);
			append(p, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

class About extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default About;
//# sourceMappingURL=About.js.map
