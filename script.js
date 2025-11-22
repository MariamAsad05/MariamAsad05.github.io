// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 65,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active state on scroll
window.addEventListener('scroll', function() {
    const sections = ['about', 'education', 'skills', 'experience', 'resume', 'contact'];
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    let offsetPadding = 220;
    sections.forEach(id => {
        const sec = document.getElementById(id);
        if (sec && scrollPos >= sec.offsetTop - offsetPadding) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const currNav = document.querySelector(`.nav-link[href="#${id}"]`);
            if (currNav) currNav.classList.add('active');
        }
    });
});

// Intersection observer for fade-ins
const fadeEls = document.querySelectorAll('.glass-section, .skills-grid, .resume-section, .contact-container, .exp-card, .skill-card, .skill-square, .course-item');
const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.16});
fadeEls.forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// Glow hover effects via CSS variables
const microGlowEls = document.querySelectorAll('.skill-square, .glass-card, .resume-btn, .glow-btn, .footer-icon');
microGlowEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.boxShadow = '0 0 44px #22d7fc5a, 0 0 23px #8362f792';
    });
    el.addEventListener('mouseleave', () => {
        el.style.boxShadow = '';
    });
});

// Contact form JS (dummy handler for submission)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMsg").textContent = "Thanks for your message!";
    setTimeout(() => {
        document.getElementById("formMsg").textContent = "";
    }, 3500);
    this.reset();
});

// Arrow scroll-down button functionality
document.getElementById('scrollDownBtn').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
});