// Initialize VanillaTilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 2,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
document.querySelector('.slide-left').addEventListener('click', () => {
    document.querySelector('.projects-grid').scrollBy({ left: -150, behavior: 'smooth' });
});

document.querySelector('.slide-right').addEventListener('click', () => {
    document.querySelector('.projects-grid').scrollBy({ left: 150, behavior: 'smooth' });
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});