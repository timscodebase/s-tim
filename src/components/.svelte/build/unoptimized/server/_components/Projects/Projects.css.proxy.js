// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".projectsWrapper.svelte-le92zs.svelte-le92zs{background-color:var(--black);padding:0.5rem var(--padding) 1rem var(--padding)}.projectsWrapper.svelte-le92zs h1.svelte-le92zs{font-size:3rem;background:var(--purpletoyellow);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.projectsGrid.svelte-le92zs.svelte-le92zs{display:flex;flex-wrap:wrap;gap:10px;margin:0 -2rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}