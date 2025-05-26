// Typing animation
const typingText = document.querySelector('.typing-text');
const roles = Array.from(typingText.children);
let currentRoleIndex = 0;

function updateTypingText() {
    // Remove active class from all roles
    roles.forEach(role => role.classList.remove('active'));
    
    // Add active class to current role
    roles[currentRoleIndex].classList.add('active');
    
    // Update index for next role
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

// Initial update
updateTypingText();

// Update every 3 seconds
setInterval(updateTypingText, 3000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .experience-card, .education, .certifications');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.skill-category, .experience-card, .education, .certifications').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease-out';
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on load
window.addEventListener('load', animateOnScroll);

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
} 