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

// ---------- notifications: custom scrollbar synced to real scroll (supports multiple cards) ----------
document.querySelectorAll('.notif-list-wrap').forEach(wrap => {
  const notifList = wrap.querySelector('.notif-list');
  const notifTrack = wrap.querySelector('.notif-scrollbar');
  const notifThumb = wrap.querySelector('.notif-scrollbar-thumb');
  if (!notifList || !notifTrack || !notifThumb) return;

  function updateNotifThumb() {
    const trackHeight = notifTrack.clientHeight;
    const contentHeight = notifList.scrollHeight;
    const visibleHeight = notifList.clientHeight;
    const maxScroll = contentHeight - visibleHeight;

    if (maxScroll <= 0) {
      notifThumb.style.height = trackHeight + 'px';
      notifThumb.style.top = '0px';
      return;
    }

    const thumbHeight = Math.max((visibleHeight / contentHeight) * trackHeight, 20);
    const maxThumbTop = trackHeight - thumbHeight;
    const scrollRatio = notifList.scrollTop / maxScroll;

    notifThumb.style.height = thumbHeight + 'px';
    notifThumb.style.top = (scrollRatio * maxThumbTop) + 'px';
  }

  notifList.addEventListener('scroll', updateNotifThumb);
  window.addEventListener('resize', updateNotifThumb);
  updateNotifThumb();
});
