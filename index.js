const totalPages = 5;
let current = 1, flipped = false;

function showPage(n) {
  document.querySelectorAll('.page').forEach(pg => {
    const isCurr = pg.id === `page-${n}`;
    pg.style.visibility = isCurr ? 'visible' : 'hidden';
    pg.classList.toggle('flipped', isCurr && flipped);
  });
  document.getElementById('page-number').textContent = `${current} / ${totalPages}`;
}

function nextPage() {
  if (current < totalPages) { current++; flipped = false; showPage(current); }
}
function prevPage() {
  if (current > 1) { current--; flipped = false; showPage(current); }
}
function flip() {
  flipped = !flipped;
  showPage(current);
}

document.addEventListener('DOMContentLoaded', () => showPage(current));
