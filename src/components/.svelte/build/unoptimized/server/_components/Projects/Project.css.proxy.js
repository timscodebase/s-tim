// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h3.svelte-h4ukb3.svelte-h4ukb3{color:var(--purple);text-shadow:0px 0px 4px var(--black)}.links.svelte-h4ukb3.svelte-h4ukb3{display:flex;margin-top:1rem;justify-content:space-between}.links.svelte-h4ukb3 a.svelte-h4ukb3{display:inline-block;padding:5px 10px;border-radius:20px;background:var(--purpletoyellow)}.links.svelte-h4ukb3 a.svelte-h4ukb3,.links.svelte-h4ukb3 a.svelte-h4ukb3:hover,.links.svelte-h4ukb3 a.svelte-h4ukb3:visited{color:var(--black)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}