const nav = document.getElementById('nav');
const btn = document.getElementById('menuBtn');
if (btn && nav) {
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.background = window.scrollY > 20 ? 'rgba(7,7,8,.92)' : 'rgba(7,7,8,.72)';
});
