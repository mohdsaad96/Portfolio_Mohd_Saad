// ===========================
// NAVIGATION FUNCTIONALITY
// ===========================

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
if (navLinks && navLinks.length) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') && link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// DARK MODE TOGGLE
// ===========================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update icon based on theme
function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

updateThemeIcon(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// SMOOTH SCROLLING
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// ANIMATED SKILL BARS
// ===========================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress') || '0';
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.style.width = progress + '%';
            bar.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ===========================
// PROJECTS FILTERING
// ===========================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===========================
// PROJECT MODAL
// ===========================

const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

// Project data with placeholder information so modal functions work
const projectsData = {
    project1: {
        title: "Sample Project 1",
        category: "Commercial",
        client: "Client A",
        location: "City A",
        duration: "6 months",
        budget: "$10,000",
        year: "2023",
        description: "This is a placeholder description for Project 1. Replace with real details later.",
        features: [
            "Feature one",
            "Feature two",
            "Feature three"
        ],
        technologies: ["AutoCAD", "Revit", "STAAD Pro", "3D Modeling"],
        images: [
            "assets/images/project1-1.jpg",
            "assets/images/project1-2.jpg",
            "assets/images/project1-3.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project2: {
        title: "Sample Project 2",
        category: "Infrastructure",
        client: "Client B",
        location: "City B",
        duration: "4 months",
        budget: "$8,000",
        year: "2022",
        description: "Placeholder description for Project 2.",
        features: ["Feature A", "Feature B"],
        technologies: ["Revit", "SketchUp"],
        images: [
            "assets/images/project2-1.jpg",
            "assets/images/project2-2.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project3: {
        title: "Sample Project 3",
        category: "Residential",
        client: "Client C",
        location: "City C",
        duration: "3 months",
        budget: "$5,000",
        year: "2022",
        description: "Placeholder description for Project 3.",
        features: ["Design", "3D Modeling"],
        technologies: ["AutoCAD"],
        images: [
            "assets/images/project3-1.jpg",
            "assets/images/project3-2.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project4: {
        title: "Sample Project 4",
        category: "Institutional",
        client: "Client D",
        location: "City D",
        duration: "8 months",
        budget: "$15,000",
        year: "2021",
        description: "Placeholder description for Project 4.",
        features: ["Feature X", "Feature Y"],
        technologies: ["Revit", "STAAD Pro"],
        images: [
            "assets/images/project4-1.jpg",
            "assets/images/project4-2.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project5: {
        title: "Sample Project 5",
        category: "Landscape",
        client: "Client E",
        location: "City E",
        duration: "2 months",
        budget: "$3,000",
        year: "2020",
        description: "Placeholder description for Project 5.",
        features: ["Feature 1"],
        technologies: ["SketchUp"],
        images: [
            "assets/images/project5-1.jpg",
            "assets/images/project5-2.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project6: {
        title: "Sample Project 6",
        category: "Renovation",
        client: "Client F",
        location: "City F",
        duration: "5 months",
        budget: "$7,000",
        year: "2019",
        description: "Placeholder description for Project 6.",
        features: ["Renovation", "Structural Analysis"],
        technologies: ["AutoCAD"],
        images: [
            "assets/images/project6-1.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    }
};

// Open Project Modal
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    if (!projectModal || !modalBody) return;
    
    // Generate image gallery HTML
    const galleryHTML = (project.images || []).map(img => `
        <div class="gallery-image" onclick="openImageLightbox('${img}')">
            <img src="${img}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300/34495e/ffffff?text=Project+Image'">
        </div>
    `).join('');
    
    // Generate features list
    const featuresHTML = (project.features || []).map(feature => `
        <li><i class="fas fa-check-circle"></i> ${feature}</li>
    `).join('');
    
    // Generate technologies
    const techHTML = (project.technologies || []).map(tech => `
        <span><i class="fas fa-tools"></i> ${tech}</span>
    `).join('');
    
    // Populate modal
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="modal-meta">
                <div class="modal-meta-item">
                    <i class="fas fa-tag"></i>
                    <span>${project.category}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-user"></i>
                    <span>${project.client}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${project.location}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${project.duration}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${project.budget}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${project.year}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-gallery">
            ${galleryHTML}
        </div>
        
        <div class="modal-description">
            <h3>Project Overview</h3>
            <p>${project.description}</p>
        </div>
        
        <div class="modal-features">
            <h3>Key Features & Highlights</h3>
            <ul>
                ${featuresHTML}
            </ul>
        </div>
        
        <div class="modal-features">
            <h3>Technologies & Tools Used</h3>
            <div class="project-tech">
                ${techHTML}
            </div>
        </div>
        
        <div class="modal-links">
            <a href="${project.links.demo}" class="btn btn-primary" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                View Live Project
            </a>
            <a href="${project.links.github}" class="btn btn-secondary" target="_blank">
                <i class="fas fa-file-pdf"></i>
                Download Documentation
            </a>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Project Modal
function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===========================
// IMAGE LIGHTBOX (Simple Implementation)
// ===========================

function openImageLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeLightbox()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${imageSrc}" alt="Project Image" onerror="this.src='https://via.placeholder.com/800x600/34495e/ffffff?text=Image'">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .image-lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .lightbox-content img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        }
        .lightbox-close {
            position: absolute;
            top: -50px;
            right: 0;
            width: 40px;
            height: 40px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }
        .lightbox-close:hover {
            transform: rotate(90deg) scale(1.1);
        }
    `;
    document.head.appendChild(style);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.image-lightbox');
    if (lightbox) {
        lightbox.remove();
        document.body.style.overflow = 'auto';
    }
}

// ===========================
// CONTACT FORM VALIDATION
// ===========================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
        const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
        const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
        const subject = document.getElementById('subject') ? document.getElementById('subject').value.trim() : '';
        const message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('name', 'Name is required');
            isValid = false;
        } else if (name.length < 3) {
            showError('name', 'Name must be at least 3 characters');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone (optional but check format if provided)
        if (phone !== '' && !isValidPhone(phone)) {
            showError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate subject
        if (subject === '') {
            showError('subject', 'Subject is required');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission
            if (formStatus) {
                formStatus.textContent = 'Sending message...';
                formStatus.className = 'form-status';
                formStatus.style.display = 'block';
            }
            
            // Simulate API call
            setTimeout(() => {
                if (formStatus) {
                    formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                    formStatus.className = 'form-status success';
                }
                if (contactForm) contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (formStatus) formStatus.style.display = 'none';
                }, 5000);
            }, 2000);
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const errorElement = field.parentElement ? field.parentElement.querySelector('.error-message') : null;
    if (errorElement) errorElement.textContent = message;
    field.style.borderColor = '#e74c3c';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = contactForm ? contactForm.querySelectorAll('input, textarea') : [];
    
    errorMessages.forEach(error => error.textContent = '');
    inputs.forEach(input => input.style.borderColor = '');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Clear error on input
if (contactForm) {
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorElement = input.parentElement ? input.parentElement.querySelector('.error-message') : null;
            if (errorElement) errorElement.textContent = '';
            input.style.borderColor = '';
        });
    });
}

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================

function revealOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            element.classList.add('aos-animate');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===========================
// LAZY LOADING IMAGES
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset && img.dataset.src) img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===========================
// TYPING EFFECT (Optional Enhancement)
// ===========================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    revealOnScroll();
    animateSkillBars();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%c👷 Civil Engineer Portfolio', 'color: #3498db; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #27ae60; font-size: 14px;');
console.log('%cLooking for collaboration? Let\'s connect!', 'color: #e74c3c; font-size: 14px;');

// ===========================
// INITIALIZE ON PAGE LOAD
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    revealOnScroll();
    animateSkillBars();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Smooth page load
    window.scrollTo(0, 0);
});
