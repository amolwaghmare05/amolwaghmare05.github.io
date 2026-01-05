// ===========================
// Smooth Scrolling & Navigation
// ===========================

// Toggle Projects Visibility
function toggleProjects() {
    const moreProjects = document.getElementById('moreProjects');
    const btnText = document.getElementById('btnText');
    const btnIcon = document.getElementById('btnIcon');
    
    if (moreProjects.style.display === 'none' || moreProjects.style.display === '') {
        moreProjects.style.display = 'contents';
        btnText.textContent = 'Show Less';
        btnIcon.classList.remove('fa-chevron-down');
        btnIcon.classList.add('fa-chevron-up');
    } else {
        moreProjects.style.display = 'none';
        btnText.textContent = 'Show All Projects';
        btnIcon.classList.remove('fa-chevron-up');
        btnIcon.classList.add('fa-chevron-down');
        // Scroll to projects section
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Scroll Animations
// ===========================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards, skill cards, etc.
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.project-card, .soft-skill-card, .timeline-item, .contact-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate skill progress bars when visible
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
});

// ===========================
// Contact Form Handling
// ===========================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get the submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Get form values for auto-reply
    const userName = document.getElementById('from_name').value;
    const userEmail = document.getElementById('email').value;
    
    // Send email to yourself using EmailJS
    emailjs.sendForm('service_v9cc1mm', 'template_82rsfzp', contactForm)
        .then(() => {
            console.log('Email sent to you successfully!');
            
            // Send auto-reply to the user
            const autoReplyParams = {
                to_email: userEmail,
                to_name: userName,
                from_name: 'Amol Waghmare'
            };
            
            return emailjs.send('service_v9cc1mm', 'template_autoreply', autoReplyParams);
        })
        .then(() => {
            console.log('Auto-reply sent successfully!');
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'flex';
                formSuccess.style.display = 'none';
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 5000);
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again or email me directly at contact.amolwaghmare@gmail.com');
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
});

// ===========================
// Project Details Modal
// ===========================

const projectDetails = {
    1: {
        title: 'Intelligent Inventory Management System',
        description: 'An advanced inventory management system powered by artificial intelligence and machine learning algorithms. This system provides real-time tracking, predictive analytics for stock optimization, and automated reordering suggestions.',
        features: [
            'AI-powered demand forecasting',
            'Real-time inventory tracking',
            'Automated stock alerts and reordering',
            'Advanced analytics dashboard',
            'Multi-location support',
            'Integration with popular e-commerce platforms'
        ],
        technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL', 'React', 'Chart.js'],
        github: '#',
        demo: '#'
    },
    2: {
        title: 'ESP32 AI Voice Assistant',
        description: 'A cutting-edge IoT project featuring an ESP32 microcontroller-based voice assistant with integrated Text-to-Speech and Speech-to-Text capabilities. Perfect for smart home automation and hands-free control.',
        features: [
            'Voice command recognition',
            'Natural language processing',
            'Text-to-Speech responses',
            'Smart home device control',
            'Low power consumption',
            'Offline voice processing capability'
        ],
        technologies: ['C++', 'ESP32', 'Arduino IDE', 'Google Cloud Speech API', 'MQTT', 'Home Assistant'],
        github: '#',
        demo: '#'
    },
    3: {
        title: 'Food Ordering System',
        description: 'A comprehensive Java-based desktop application for restaurant food ordering. Features an intuitive GUI built with Java Swing, complete menu management, order processing, and receipt generation.',
        features: [
            'User-friendly graphical interface',
            'Menu browsing and search',
            'Shopping cart functionality',
            'Order history tracking',
            'Receipt generation and printing',
            'Admin panel for menu management'
        ],
        technologies: ['Java', 'Swing', 'JDBC', 'MySQL', 'JasperReports'],
        github: '#',
        demo: '#'
    },
    4: {
        title: 'Online Gas Booking System',
        description: 'A robust database management system for online gas cylinder booking. Includes user authentication, booking management, delivery tracking, and comprehensive admin controls.',
        features: [
            'User registration and authentication',
            'Real-time booking system',
            'Delivery scheduling and tracking',
            'Payment integration',
            'Admin dashboard for management',
            'Automated notifications and alerts'
        ],
        technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
        github: '#',
        demo: '#'
    }
};

function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectDetails[projectId];
    
    const featuresHTML = project.features.map(feature => 
        `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
    ).join('');
    
    const technologiesHTML = project.technologies.map(tech => 
        `<span class="tag">${tech}</span>`
    ).join('');
    
    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        
        <div class="modal-section">
            <h3><i class="fas fa-star"></i> Key Features</h3>
            <ul class="features-list">${featuresHTML}</ul>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-code"></i> Technologies Used</h3>
            <div class="modal-tags">${technologiesHTML}</div>
        </div>
        
        <div class="modal-buttons">
            <a href="${project.github}" class="btn btn-secondary" target="_blank">
                <i class="fab fa-github"></i> View on GitHub
            </a>
            <a href="${project.demo}" class="btn btn-primary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===========================
// Typing Effect for Hero Section
// ===========================

const typingText = document.querySelector('.hero-tagline');
const originalText = typingText.textContent;

function typeWriter(text, element, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(originalText, typingText, 50);
    }, 500);
});

// ===========================
// Scroll to Top Button (Optional)
// ===========================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
    font-size: 1.2rem;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
});

// ===========================
// Additional Modal Styles
// ===========================

// Add modal styles dynamically
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-title {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--text-dark);
    }
    
    .modal-description {
        color: var(--text-light);
        line-height: 1.8;
        margin-bottom: 2rem;
    }
    
    .modal-section {
        margin-bottom: 2rem;
    }
    
    .modal-section h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .modal-section h3 i {
        color: var(--primary-color);
    }
    
    .features-list {
        list-style: none;
        padding: 0;
    }
    
    .features-list li {
        padding: 0.5rem 0;
        color: var(--text-light);
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
    
    .features-list i {
        color: var(--primary-color);
    }
    
    .modal-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
    }
    
    .modal-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }
    
    .modal-buttons .btn {
        flex: 1;
        min-width: 150px;
        justify-content: center;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .modal-buttons {
            flex-direction: column;
        }
        
        .modal-buttons .btn {
            width: 100%;
        }
    }
`;

document.head.appendChild(modalStyles);

// ===========================
// Console Welcome Message
// ===========================

console.log('%c👋 Welcome to Amol Waghmare\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repository!', 'color: #6b7280; font-size: 14px;');
