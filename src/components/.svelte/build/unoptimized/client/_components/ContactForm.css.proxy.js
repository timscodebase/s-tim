// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".form.svelte-59rfn3.svelte-59rfn3{max-width:100vw;display:grid;grid-gap:10px;grid-template-columns:3fr 1fr;margin-bottom:2rem}.label.svelte-59rfn3.svelte-59rfn3{display:flex;justify-content:space-between;color:var(--white)}.padTop.svelte-59rfn3.svelte-59rfn3{padding-top:0.5rem}.form.svelte-59rfn3 input.svelte-59rfn3,.form.svelte-59rfn3 textarea.svelte-59rfn3{width:100%}.submit.svelte-59rfn3.svelte-59rfn3{width:100%;background:var(--yellowtopurple);border:0;outline:0;padding:0.5rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}