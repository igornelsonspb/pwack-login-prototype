// ---------- tabs (visual only) ----------
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ---------- period dropdown ----------
const periodDropdown = document.getElementById('periodDropdown');
const periodLabel = document.getElementById('periodLabel');

periodDropdown.addEventListener('click', e => {
  if (e.target.closest('.dropdown-item')) return;
  periodDropdown.classList.toggle('open');
});

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    periodLabel.textContent = `Период обновления ${item.dataset.minutes} мин`;
    periodDropdown.classList.remove('open');
  });
});

document.addEventListener('click', e => {
  if (!periodDropdown.contains(e.target)) periodDropdown.classList.remove('open');
});

// ---------- ripple animation: plays once (~4.88s at 2x slower speed), then a 5s pause before replaying ----------
document.querySelectorAll('[data-ripple]').forEach(img => {
  const src = img.getAttribute('src');
  const playDuration = 4880;
  const pauseDuration = 5000;

  function replay() {
    img.src = src + '?t=' + Date.now();
    setTimeout(replay, playDuration + pauseDuration);
  }

  setTimeout(replay, playDuration + pauseDuration);
});
