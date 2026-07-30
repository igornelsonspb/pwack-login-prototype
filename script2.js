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
