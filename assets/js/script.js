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


// Modale

const openModalBtn = document.querySelector('#open-modal-btn');
const quoteModal = document.querySelector('#quote-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');
const quoteForm = document.querySelector('#quote-form');
const successMessage = document.querySelector('#success-message');

// Apertura della modale
openModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  quoteModal.classList.add('active');
});

// Chiusura della modale cliccando sulla X
closeModalBtn.addEventListener('click', () => {
  quoteModal.classList.remove('active');
});

// Chiusura della modale cliccando fuori
quoteModal.addEventListener('click', (e) => {
  if (e.target === quoteModal) {
    quoteModal.classList.remove('active');
  }
});

// Gestione dell'invio del form
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
   successMessage.classList.add('show');

    setTimeout(() => {
    quoteModal.classList.remove('active');

        setTimeout(() => {
      quoteForm.reset(); 
      successMessage.classList.remove('show'); 
    }, 300);

  }, 2000);
});