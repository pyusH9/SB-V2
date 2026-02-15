// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Featured Carousel with Autoplay
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
const cardWidth = 310; // card width + margin
const totalCards = cards.length;

// Function to move carousel
function moveCarousel() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Prev/Next Buttons
prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalCards) % totalCards;
    moveCarousel();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalCards;
    moveCarousel();
});

// Autoplay
setInterval(() => {
    index = (index + 1) % totalCards;
    moveCarousel();
}, 3000); // moves every 3 seconds

const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Full-page modal functionality
const modal = document.getElementById('fullModal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

// Select all cards (poetries, stories, featured)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').innerText;
    const imgSrc = card.querySelector('img').src;
    const text = card.querySelector('p').innerText;

    modalTitle.innerText = title;
    modalImage.src = imgSrc;
    modalText.innerText = text;

    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on clicking outside content
window.addEventListener('click', e => {
  if(e.target === modal) modal.style.display = 'none';
});

