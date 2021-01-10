// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".secondaryHeader.svelte-ae2h47.svelte-ae2h47{display:flex;justify-content:space-between;padding:var(--padding);background:rgb(255, 248, 0);background:var(--yellowtopurple)}.h1.svelte-ae2h47.svelte-ae2h47{font-size:2.5rem;background:var(--redtoblue);background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:var(--black)}.socialIcons.svelte-ae2h47.svelte-ae2h47{width:160px;margin:0 0 0 auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.socialIcons.svelte-ae2h47 a.svelte-ae2h47{color:var(--white);padding:0 1rem;font-size:1.5rem}.carousel.svelte-ae2h47.svelte-ae2h47{overflow:hidden;display:flex;justify-self:end;vertical-align:top;height:32px;margin:0;font-size:1.75rem}.inner.svelte-ae2h47.svelte-ae2h47{margin-left:auto;animation:svelte-ae2h47-scroll 5s ease-in-out infinite}.element.svelte-ae2h47.svelte-ae2h47{font-size:1.1em;text-shadow:0px 2px 2px #fba09d}@keyframes svelte-ae2h47-scroll{0%,20%{transform:translateY(-10px)}25%,45%{transform:translateY(-58px)}50%,70%{transform:translateY(-100px)}75%,95%{transform:translateY(-144px)}100%{transform:translateY(-130px)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}