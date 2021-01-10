// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".separator.svelte-u1ecef{position:relative;height:10px;border-top:3px solid var(--black);border-bottom:3px solid var(--black);background:rgb(255, 0, 0);background:linear-gradient(\n      90deg,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(252, 253, 29, 1) 20%,\n      rgba(26, 255, 0, 1) 40%,\n      rgba(44, 48, 253, 1) 60%,\n      rgba(253, 55, 252, 1) 80%,\n      rgba(252, 69, 69, 1) 100%\n    );box-shadow:0 0 0 1px var(--white)}.separator.svelte-u1ecef::before{content:'';position:absolute;--lines-colors:var(--black);--lines-widths:4, 2, 3, 2;--lines-gaps:2, 4, 3, 1;--lines-rotate:135;background-image:paint(lines)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}