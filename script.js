const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 550);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);

  const subject = encodeURIComponent('Solicitud de información - COUNTER PRICE, S.C.');
  const body = encodeURIComponent(
    `Nombre: ${data.get('name')}\n` +
    `Correo: ${data.get('email')}\n` +
    `Teléfono: ${data.get('phone') || 'No proporcionado'}\n` +
    `Servicio de interés: ${data.get('service')}\n\n` +
    `Mensaje:\n${data.get('message')}`
  );

  window.location.href = `mailto:cpm.matias97@gmail.com?subject=${subject}&body=${body}`;
});
