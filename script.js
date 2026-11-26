const gridEl = document.getElementById("grid");
const cells = [];

for (let i = 0; i <81; i++) {
    const r = Math.floor(i / 9);
    const c = i % 9; 
    const el = document.createElement("button");
    el.type = "button";
    el.className = "cell";
    if (c % 3 === 2 && c !== 8) el.classList.add("br");
    if (r % 3 === 2 && r !== 8) el.classList.add("bb"); 
    el.textContent = i;
    gridEl.appendChild(el);
    cells.push(el);
}

const padEl = document.getElementById("pad");
const padBtns = [];

for (let n = 1; n <= 9; n++) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = n;
  padEl.appendChild(b);
  padBtns.push(b);
}