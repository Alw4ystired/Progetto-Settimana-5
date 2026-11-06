// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.


// Header effetto scroll
const siteHeader = document.querySelector('#site-header');


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});