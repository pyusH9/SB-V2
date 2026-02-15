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

// Featured Carousel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

prevBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.carousel-card');
    index = (index - 1 + cards.length) % cards.length;
    track.style.transform = `translateX(-${index * 310}px)`;
});

nextBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.carousel-card');
    index = (index + 1) % cards.length;
    track.style.transform = `translateX(-${index * 310}px)`;
});

