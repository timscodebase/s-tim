// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bodyWrapper.svelte-1bvkf99{width:1200px;margin:0 auto;overflow-y:hidden;box-shadow:0px 0px 35px 0px rgba(0, 0, 0, 0.75)}@media only screen and (max-width: 1200px){.bodyWrapper.svelte-1bvkf99{max-width:100vw;margin:0}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}