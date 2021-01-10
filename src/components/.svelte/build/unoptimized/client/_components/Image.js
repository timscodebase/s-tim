import './Image.css.proxy.js';
/* src/components/Image.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style,
	space
} from "../web_modules/svelte/internal.js";

import "../web_modules/lazysizes.js";

function create_fragment(ctx) {
	let div1;
	let div0;
	let t0;
	let img0;
	let img0_src_value;
	let t1;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			img0 = element("img");
			t1 = space();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
			children(div0).forEach(detach);
			t0 = claim_space(div1_nodes);

			img0 = claim_element(div1_nodes, "IMG", {
				class: true,
				src: true,
				srcset: true,
				"data-srcset": true,
				sizes: true,
				alt: true
			});

			t1 = claim_space(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "aspect-ratio-holder svelte-pobeus");
			set_style(div0, "--pb", /*padding_bottom_percentage*/ ctx[5]);
			attr(img0, "class", "lazyload svelte-pobeus");
			if (img0.src !== (img0_src_value = /*src*/ ctx[1])) attr(img0, "src", img0_src_value);
			attr(img0, "srcset", /*placeholder*/ ctx[0]);
			attr(img0, "data-srcset", /*srcset*/ ctx[2]);
			attr(img0, "sizes", /*sizes*/ ctx[4]);
			attr(img0, "alt", /*alt*/ ctx[3]);
			attr(div1, "class", "wrapper svelte-pobeus");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div1, t0);
			append(div1, img0);
			append(div1, t1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*src*/ 2 && img0.src !== (img0_src_value = /*src*/ ctx[1])) {
				attr(img0, "src", img0_src_value);
			}

			if (dirty & /*placeholder*/ 1) {
				attr(img0, "srcset", /*placeholder*/ ctx[0]);
			}

			if (dirty & /*srcset*/ 4) {
				attr(img0, "data-srcset", /*srcset*/ ctx[2]);
			}

			if (dirty & /*sizes*/ 16) {
				attr(img0, "sizes", /*sizes*/ ctx[4]);
			}

			if (dirty & /*alt*/ 8) {
				attr(img0, "alt", /*alt*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { aspectRatio } = $$props;
	let { placeholder } = $$props;
	let { src } = $$props;
	let { srcset } = $$props;
	let { alt } = $$props;
	let { sizes = "auto" } = $$props; // 'auto' only works when using `lazysizes`
	let padding_bottom_percentage = 100 / aspectRatio + "%";

	$$self.$$set = $$props => {
		if ("aspectRatio" in $$props) $$invalidate(6, aspectRatio = $$props.aspectRatio);
		if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
		if ("src" in $$props) $$invalidate(1, src = $$props.src);
		if ("srcset" in $$props) $$invalidate(2, srcset = $$props.srcset);
		if ("alt" in $$props) $$invalidate(3, alt = $$props.alt);
		if ("sizes" in $$props) $$invalidate(4, sizes = $$props.sizes);
	};

	return [placeholder, src, srcset, alt, sizes, padding_bottom_percentage, aspectRatio];
}

class Image extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			aspectRatio: 6,
			placeholder: 0,
			src: 1,
			srcset: 2,
			alt: 3,
			sizes: 4
		});
	}
}

export default Image;
//# sourceMappingURL=Image.js.map