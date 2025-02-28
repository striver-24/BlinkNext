// Animated number counters
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
};

// Intersection Observer for triggering animations when elements come into view
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats-container')) {
                animateStats();
            }
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Only animate once
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1
});

// Observe elements that should trigger animations
document.querySelectorAll('.service-card, .stats-container').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// WhatsApp button functionality
document.getElementById('whatsapp-button')?.addEventListener('click', () => {
    // Replace with your WhatsApp number
    window.open('https://wa.me/1234567890', '_blank');
});

// Chatbot toggle
const chatbotButton = document.getElementById('chatbot-button');
if (chatbotButton) {
    let isChatOpen = false;

    chatbotButton.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            // Add your chatbot initialization code here
            console.log('Opening chat...');
        } else {
            console.log('Closing chat...');
        }
    });
}

// Navbar transparency on scroll
let lastScroll = 0;
const navbar = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.background = 'var(--glass-bg)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        // Scrolling up
        navbar.style.background = 'var(--glass-bg)';
    }
    lastScroll = currentScroll;
});

// Form submission handling
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Add your newsletter subscription logic here
    console.log('Newsletter subscription for:', email);
    
    // Show success message
    alert('Thank you for subscribing!');
    e.target.reset();
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
    // Optional: Remove loader from DOM after fade out
    setTimeout(() => loader.remove(), 300);
});

// Optional: Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const scrolled = window.pageYOffset;
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});

// Optional: Add hover effect for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const icon = e.currentTarget.querySelector('.glow-icon');
        icon.style.transform = 'scale(1.2)';
    });
    
    card.addEventListener('mouseleave', (e) => {
        const icon = e.currentTarget.querySelector('.glow-icon');
        icon.style.transform = 'scale(1)';
    });
});

// Page transition and smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-transition');
});

// Active link highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Intersection Observer for animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Initialize animations for elements
document.querySelectorAll('.service-card, .testimonial-card').forEach(el => {
    el.classList.add('hidden');
    animationObserver.observe(el);
});

// Stats observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats-container')) {
                animateStats();
            }
            entry.target.classList.add('animate');
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Observe elements that should trigger animations
document.querySelectorAll('.stats-container').forEach(el => {
    statsObserver.observe(el);
}); 