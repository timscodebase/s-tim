// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".about.svelte-uc9rnb{position:relative;height:320px;background-color:var(--white)}.image.svelte-uc9rnb{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('/me-min.jpg');background-size:cover;background-position:40%}.textWrapper.svelte-uc9rnb{position:absolute;top:0;left:0;width:100%;height:100%;color:var(--purple);padding:var(--padding);background-color:rgba(255, 255, 255, 0.75)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}