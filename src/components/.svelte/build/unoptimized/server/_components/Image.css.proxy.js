// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".wrapper.svelte-pobeus{position:relative;overflow:hidden}.aspect-ratio-holder.svelte-pobeus{--pb:100%;padding-bottom:var(--pb)}img.svelte-pobeus{position:absolute;top:0;left:0;width:100%;height:100%}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}