// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav.svelte-dwtr0x{display:flex;gap:3px;flex-wrap:wrap;padding:3px;background:rgb(255, 0, 0);background:linear-gradient(\n      90deg,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(252, 253, 29, 1) 20%,\n      rgba(26, 255, 0, 1) 40%,\n      rgba(44, 48, 253, 1) 60%,\n      rgba(253, 55, 252, 1) 80%,\n      rgba(252, 69, 69, 1) 100%\n    )}.link.svelte-dwtr0x{display:flex;flex:1 1 180px;justify-content:space-between;align-items:center;padding:10px 20px;color:var(--purple);text-transform:uppercase;background-color:var(--black);border:0;outline:none;font-size:0.8rem}@media only screen and (min-width: 400px){.nav.svelte-dwtr0x{display:flex;padding:5px 0;gap:5px;background-color:var(--black)}.link.svelte-dwtr0x{flex:1 1 381px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}