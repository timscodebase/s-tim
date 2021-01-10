// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".footer.svelte-1gk6cl8.svelte-1gk6cl8{flex-wrap:wrap;background-color:var(--black);padding:var(--padding);padding-top:1rem}.footer.svelte-1gk6cl8 section.svelte-1gk6cl8{flex:1 550px}.footer.svelte-1gk6cl8 a.svelte-1gk6cl8,.footer.svelte-1gk6cl8.svelte-1gk6cl8:visited{color:var(--red)}.footer.svelte-1gk6cl8 a.svelte-1gk6cl8:hover{color:var(--orange)}.footer.svelte-1gk6cl8 h3.svelte-1gk6cl8{font-size:2rem;font-weight:300;font-family:'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;color:var(--purple)}.socialLinks.svelte-1gk6cl8.svelte-1gk6cl8{max-width:360px;display:flex;justify-content:space-between;font-size:2rem;padding:1rem 0;margin:0 auto}.signOff.svelte-1gk6cl8.svelte-1gk6cl8{color:var(--white);padding:1rem 0;text-align:center}.hide.svelte-1gk6cl8.svelte-1gk6cl8{display:block}@media(min-width: 1024px){.footer.svelte-1gk6cl8.svelte-1gk6cl8{display:flex}.hide.svelte-1gk6cl8.svelte-1gk6cl8{display:none}.socialLinks.svelte-1gk6cl8.svelte-1gk6cl8{padding-top:10%}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}