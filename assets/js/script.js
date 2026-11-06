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


// Tema scuro
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    // Aggiunge o toglie la classe "dark-mode" al body
    document.body.classList.toggle('dark-mode');

    // Cambia l'icona in base allo stato
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.className = 'fa-solid fa-sun icon-sun';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
    }
});

// Carosello 
const testimonialsGrid = document.querySelector('.testimonials-grid');
const track = document.querySelector('.testimonials-track');

// Raddoppio le card nell'HTML
track.innerHTML += track.innerHTML;

// Le copie (la seconda metà) dato che sono solo grafiche, le nascondo così allo screen reader
const allTestimonialCards = track.querySelectorAll('.testimonial-card');
const halfCards = allTestimonialCards.length / 2;

allTestimonialCards.forEach((card, index) => {
    if (index >= halfCards) {
        card.setAttribute('aria-hidden', 'true');
    }
});

// Pausa al passaggio del mouse
testimonialsGrid.addEventListener('mouseover', () => {
    track.classList.add('paused');
});

// Riparte quando il mouse esce
testimonialsGrid.addEventListener('mouseout', () => {
    track.classList.remove('paused');
});