/* src/components/Icon/svg/Polygon.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	assign,
	children,
	claim_element,
	detach,
	get_spread_update,
	init,
	insert,
	noop,
	safe_not_equal,
	set_svg_attributes,
	svg_element
} from "../../../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let polygon;
	let polygon_key_value;

	let polygon_levels = [
		{
			key: polygon_key_value = "polygon-" + /*id*/ ctx[0]
		},
		/*data*/ ctx[1]
	];

	let polygon_data = {};

	for (let i = 0; i < polygon_levels.length; i += 1) {
		polygon_data = assign(polygon_data, polygon_levels[i]);
	}

	return {
		c() {
			polygon = svg_element("polygon");
			this.h();
		},
		l(nodes) {
			polygon = claim_element(nodes, "polygon", { key: true }, 1);
			children(polygon).forEach(detach);
			this.h();
		},
		h() {
			set_svg_attributes(polygon, polygon_data);
		},
		m(target, anchor) {
			insert(target, polygon, anchor);
		},
		p(ctx, [dirty]) {
			set_svg_attributes(polygon, polygon_data = get_spread_update(polygon_levels, [
				dirty & /*id*/ 1 && polygon_key_value !== (polygon_key_value = "polygon-" + /*id*/ ctx[0]) && { key: polygon_key_value },
				dirty & /*data*/ 2 && /*data*/ ctx[1]
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(polygon);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { id = "" } = $$props;
	let { data = {} } = $$props;

	$$self.$$set = $$props => {
		if ("id" in $$props) $$invalidate(0, id = $$props.id);
		if ("data" in $$props) $$invalidate(1, data = $$props.data);
	};

	return [id, data];
}

class Polygon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { id: 0, data: 1 });
	}
}

export default Polygon;
//# sourceMappingURL=Polygon.js.map