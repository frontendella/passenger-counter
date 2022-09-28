let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function decrement() {
  count -= 1;
  if (count < 0) {
    count = 0;
  }
  countEl.textContent = count;
}

function save() {
  let entries = document.getElementById("entries");
  let savedEntries = ` ${count}` + " - ";
  entries.textContent += savedEntries;
  count = 0;
  countEl.textContent = count;
}
