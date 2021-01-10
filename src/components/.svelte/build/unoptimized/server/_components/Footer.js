import './Footer.css.proxy.js';
/* src/components/Footer.svelte generated by Svelte v3.31.2 */
import { create_ssr_component, escape, validate_component } from "../web_modules/svelte/internal.js";

import ContactForm from "./ContactForm.js";
import Separator from "./Separator.js";
import Icon from "./Icon/Icon.js";
import { faFacebook } from "../web_modules/@fortawesome/free-brands-svg-icons/faFacebook.js";
import { faTwitter } from "../web_modules/@fortawesome/free-brands-svg-icons/faTwitter.js";
import { faInstagram } from "../web_modules/@fortawesome/free-brands-svg-icons/faInstagram.js";
import { faGithub } from "../web_modules/@fortawesome/free-brands-svg-icons/faGithub.js";
import { faDev } from "../web_modules/@fortawesome/free-brands-svg-icons/faDev.js";
import { faCodepen } from "../web_modules/@fortawesome/free-brands-svg-icons/faCodepen.js";

const css = {
	code: ".footer.svelte-1gk6cl8.svelte-1gk6cl8{flex-wrap:wrap;background-color:var(--black);padding:var(--padding);padding-top:1rem}.footer.svelte-1gk6cl8 section.svelte-1gk6cl8{flex:1 550px}.footer.svelte-1gk6cl8 a.svelte-1gk6cl8,.footer.svelte-1gk6cl8.svelte-1gk6cl8:visited{color:var(--red)}.footer.svelte-1gk6cl8 a.svelte-1gk6cl8:hover{color:var(--orange)}.footer.svelte-1gk6cl8 h3.svelte-1gk6cl8{font-size:2rem;font-weight:300;font-family:'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;color:var(--purple)}.socialLinks.svelte-1gk6cl8.svelte-1gk6cl8{max-width:360px;display:flex;justify-content:space-between;font-size:2rem;padding:1rem 0;margin:0 auto}.signOff.svelte-1gk6cl8.svelte-1gk6cl8{color:var(--white);padding:1rem 0;text-align:center}.hide.svelte-1gk6cl8.svelte-1gk6cl8{display:block}@media(min-width: 1024px){.footer.svelte-1gk6cl8.svelte-1gk6cl8{display:flex}.hide.svelte-1gk6cl8.svelte-1gk6cl8{display:none}.socialLinks.svelte-1gk6cl8.svelte-1gk6cl8{padding-top:10%}}",
	map: "{\"version\":3,\"file\":\"Footer.svelte\",\"sources\":[\"Footer.svelte\"],\"sourcesContent\":[\"<script>\\n  import ContactForm from '$components/ContactForm.svelte';\\n  import Separator from '$components/Separator.svelte';\\n  import Icon  from '$components/Icon/Icon.svelte';\\n\\n\\n  import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'\\n  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'\\n  import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'\\n  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'\\n  import { faDev } from '@fortawesome/free-brands-svg-icons/faDev'\\n  import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen'\\n\\n  const year = new Date().getFullYear()\\n</script>\\n\\n<Separator />\\n<footer class=\\\"footer\\\">\\n  <section>\\n    <h3>Contact Me</h3>\\n    <ContactForm />\\n  </section>\\n  <section>\\n    <div class=\\\"hide\\\">\\n      <Separator fullBleed />\\n    </div>\\n    <div class=\\\"socialLinks\\\">\\n      <a\\n        href=\\\"https://www.facebook.com/tim.smith/\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noreferrer noopener\\\"\\n      >\\n        <Icon data={faFacebook} />\\n      </a>\\n      <a\\n        href=\\\"https://twitter.com/timsmith23\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noreferrer noopener\\\"\\n      >\\n        <Icon data={faTwitter} />\\n      </a>\\n      <a\\n        href=\\\"https://www.instagram.com/tithos/\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noreferrer noopener\\\"\\n      >\\n        <Icon data={faInstagram} />\\n      </a>\\n      <a\\n        href=\\\"https://dev.to/tithos\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noreferrer noopener\\\"\\n      >\\n        <Icon data={faDev} />\\n      </a>\\n      <a\\n        href=\\\"https://github.com/timscodebase\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noreferrer noopener\\\"\\n      >\\n        <Icon data={faGithub} />\\n      </a>\\n      <a\\n        href=\\\"https://codepen.io/WebRuin\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noreferrer noopener\\\"\\n      >\\n        <Icon data={faCodepen} />\\n      </a>\\n    </div>\\n    <div class=\\\"signOff\\\">\\n      <p>\\n        <a href=\\\"https://timsmith.tech\\\">timsmith.tech</a> &copy; {year}\\n      </p>\\n      <p>Made with &#129505;</p>\\n    </div>\\n  </section>\\n</footer>\\n\\n<style>\\n  .footer {\\n    flex-wrap: wrap;\\n    background-color: var(--black);\\n    padding: var(--padding);\\n    padding-top: 1rem;\\n  }\\n\\n  .footer section {\\n    flex: 1 550px;\\n  }\\n\\n  .footer a,\\n  .footer:visited {\\n    color: var(--red);\\n  }\\n  .footer a:hover {\\n    color: var(--orange);\\n  }\\n\\n  .footer h3 {\\n    font-size: 2rem;\\n    font-weight: 300;\\n    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\\n      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n    color: var(--purple);\\n  }\\n\\n  .socialLinks {\\n    max-width: 360px;\\n    display: flex;\\n    justify-content: space-between;\\n    font-size: 2rem;\\n    padding: 1rem 0;\\n    margin: 0 auto;\\n  }\\n\\n  .signOff {\\n    color: var(--white);\\n    padding: 1rem 0;\\n    text-align: center;\\n  }\\n\\n  .hide {\\n    display: block;\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .footer {\\n      display: flex;\\n    }\\n    .hide {\\n      display: none;\\n    }\\n\\n    .socialLinks {\\n      padding-top: 10%;\\n    }\\n  }\\n</style>\"],\"names\":[],\"mappings\":\"AAgFE,OAAO,8BAAC,CAAC,AACP,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,sBAAO,CAAC,OAAO,eAAC,CAAC,AACf,IAAI,CAAE,CAAC,CAAC,KAAK,AACf,CAAC,AAED,sBAAO,CAAC,gBAAC,CACT,qCAAO,QAAQ,AAAC,CAAC,AACf,KAAK,CAAE,IAAI,KAAK,CAAC,AACnB,CAAC,AACD,sBAAO,CAAC,gBAAC,MAAM,AAAC,CAAC,AACf,KAAK,CAAE,IAAI,QAAQ,CAAC,AACtB,CAAC,AAED,sBAAO,CAAC,EAAE,eAAC,CAAC,AACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,SAAS,CAAC,CAAC,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,KAAK,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC;MAC1E,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,UAAU,CAC9E,KAAK,CAAE,IAAI,QAAQ,CAAC,AACtB,CAAC,AAED,YAAY,8BAAC,CAAC,AACZ,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,QAAQ,8BAAC,CAAC,AACR,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,KAAK,8BAAC,CAAC,AACL,OAAO,CAAE,KAAK,AAChB,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,OAAO,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,AACf,CAAC,AACD,KAAK,8BAAC,CAAC,AACL,OAAO,CAAE,IAAI,AACf,CAAC,AAED,YAAY,8BAAC,CAAC,AACZ,WAAW,CAAE,GAAG,AAClB,CAAC,AACH,CAAC\"}"
};

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const year = new Date().getFullYear();
	$$result.css.add(css);

	return `${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
<footer class="${"footer svelte-1gk6cl8"}"><section class="${"svelte-1gk6cl8"}"><h3 class="${"svelte-1gk6cl8"}">Contact Me</h3>
    ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</section>
  <section class="${"svelte-1gk6cl8"}"><div class="${"hide svelte-1gk6cl8"}">${validate_component(Separator, "Separator").$$render($$result, { fullBleed: true }, {}, {})}</div>
    <div class="${"socialLinks svelte-1gk6cl8"}"><a href="${"https://www.facebook.com/tim.smith/"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-1gk6cl8"}">${validate_component(Icon, "Icon").$$render($$result, { data: faFacebook }, {}, {})}</a>
      <a href="${"https://twitter.com/timsmith23"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-1gk6cl8"}">${validate_component(Icon, "Icon").$$render($$result, { data: faTwitter }, {}, {})}</a>
      <a href="${"https://www.instagram.com/tithos/"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-1gk6cl8"}">${validate_component(Icon, "Icon").$$render($$result, { data: faInstagram }, {}, {})}</a>
      <a href="${"https://dev.to/tithos"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-1gk6cl8"}">${validate_component(Icon, "Icon").$$render($$result, { data: faDev }, {}, {})}</a>
      <a href="${"https://github.com/timscodebase"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-1gk6cl8"}">${validate_component(Icon, "Icon").$$render($$result, { data: faGithub }, {}, {})}</a>
      <a href="${"https://codepen.io/WebRuin"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-1gk6cl8"}">${validate_component(Icon, "Icon").$$render($$result, { data: faCodepen }, {}, {})}</a></div>
    <div class="${"signOff svelte-1gk6cl8"}"><p><a href="${"https://timsmith.tech"}" class="${"svelte-1gk6cl8"}">timsmith.tech</a> © ${escape(year)}</p>
      <p>Made with 🧡</p></div></section>
</footer>`;
});

export default Footer;
//# sourceMappingURL=Footer.js.map
