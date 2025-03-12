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

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.querySelector(".projects-grid");
    let isUserInteracting = false;

    // Auto-scroll function
    function autoScroll() {
        if (!isUserInteracting) {
            projectsGrid.scrollBy({ left: 200, behavior: "smooth" });
        }
    }

    // Stop auto-scroll on user interaction
    projectsGrid.addEventListener("touchstart", () => (isUserInteracting = true));
    projectsGrid.addEventListener("wheel", () => (isUserInteracting = true));

    // Auto-scroll every 3s for 8 seconds
    let autoScrollInterval = setInterval(autoScroll, 3000);
    setTimeout(() => clearInterval(autoScrollInterval), 8000);

    // Manual scroll buttons
    document.querySelector(".slide-left").addEventListener("click", () => {
        projectsGrid.scrollBy({ left: -200, behavior: "smooth" });
    });

    document.querySelector(".slide-right").addEventListener("click", () => {
        projectsGrid.scrollBy({ left: 200, behavior: "smooth" });
    });
});
