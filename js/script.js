// ===========================
// NAVIGATION FUNCTIONALITY
// ===========================

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
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

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
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
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// SMOOTH SCROLLING
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
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
        const progress = bar.getAttribute('data-progress');
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

// Project data with detailed information
const projectsData = {
    project1: {
        title: "Luxury Villa Construction",
        category: "Residential",
        client: "Private Client",
        location: "Your City, Country",
        duration: "12 Months",
        budget: "$500,000",
        year: "2023",
        description: "A sophisticated 4-bedroom luxury villa featuring contemporary architectural design with sustainable building practices. The project includes modern amenities, energy-efficient systems, and premium finishing throughout. The villa incorporates natural lighting, open floor plans, and seamless indoor-outdoor living spaces.",
        features: [
            "4 spacious bedrooms with en-suite bathrooms",
            "Open-plan living and dining area",
            "Modern kitchen with premium appliances",
            "Private swimming pool and landscaped garden",
            "Energy-efficient HVAC system",
            "Smart home automation",
            "Sustainable construction materials",
            "Underground parking for 2 vehicles"
        ],
        technologies: ["AutoCAD", "Revit", "STAAD Pro", "3D Modeling"],
        images: [
            "assets/images/project1-1.jpg",
            "assets/images/project1-2.jpg",
            "assets/images/project1-3.jpg",
            "assets/images/project1-4.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project2: {
        title: "Office Complex Development",
        category: "Commercial",
        client: "Corporate Client Name",
        location: "Your City, Country",
        duration: "18 Months",
        budget: "$2,000,000",
        year: "2023",
        description: "A state-of-the-art 5-story commercial office building designed to accommodate modern workplace needs. The complex features flexible office spaces, conference facilities, retail outlets on the ground floor, and multi-level parking. The design emphasizes natural lighting, ventilation, and energy efficiency.",
        features: [
            "5 floors of flexible office space",
            "Total built-up area: 50,000 sq ft",
            "Modern elevator systems",
            "Multi-level parking facility (100+ vehicles)",
            "Retail spaces on ground floor",
            "Conference and meeting rooms",
            "Green building features (LEED certified)",
            "Advanced fire safety systems",
            "High-speed internet infrastructure"
        ],
        technologies: ["ETABS", "Revit", "MS Project", "Primavera P6"],
        images: [
            "assets/images/project2-1.jpg",
            "assets/images/project2-2.jpg",
            "assets/images/project2-3.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project3: {
        title: "Apartment Complex",
        category: "Residential",
        client: "Real Estate Developer",
        location: "Your City, Country",
        duration: "24 Months",
        budget: "$3,500,000",
        year: "2022",
        description: "A premium multi-story residential complex featuring 32 well-designed apartments with modern amenities and infrastructure. The project includes recreational facilities, landscaped gardens, and secure parking. Each unit is designed for optimal space utilization and natural ventilation.",
        features: [
            "32 residential units (2BHK and 3BHK)",
            "8-story building with elevator access",
            "Rooftop recreational area",
            "Children's play area",
            "Gymnasium and clubhouse",
            "24/7 security system",
            "Rainwater harvesting system",
            "Solar panels for common area lighting",
            "Covered parking for residents"
        ],
        technologies: ["AutoCAD", "STAAD Pro", "SAP 2000"],
        images: [
            "assets/images/project3-1.jpg",
            "assets/images/project3-2.jpg",
            "assets/images/project3-3.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project4: {
        title: "Road & Bridge Construction",
        category: "Infrastructure",
        client: "Municipal Corporation",
        location: "Your City, Country",
        duration: "30 Months",
        budget: "$5,000,000",
        year: "2022",
        description: "Major infrastructure development project including highway expansion and bridge construction. The project involved widening existing roads, constructing a new 4-lane bridge over a river, and implementing modern drainage systems. Special attention was given to traffic management during construction and minimizing environmental impact.",
        features: [
            "15 km highway expansion to 4 lanes",
            "New bridge construction (300m span)",
            "Advanced drainage system",
            "Street lighting with LED fixtures",
            "Landscaping and green belts",
            "Pedestrian walkways and cycle tracks",
            "Traffic signal automation",
            "Safety barriers and signage"
        ],
        technologies: ["AutoCAD Civil 3D", "Primavera P6", "GPS Survey Equipment"],
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
        title: "Shopping Mall Construction",
        category: "Commercial",
        client: "Retail Development Corp",
        location: "Your City, Country",
        duration: "36 Months",
        budget: "$10,000,000",
        year: "2021",
        description: "Large-scale retail and entertainment complex spanning 200,000 sq ft. The mall features multiple floors of retail spaces, food courts, cinema complex, and entertainment zones. The design incorporates modern architectural elements with efficient crowd management systems and parking facilities.",
        features: [
            "3 floors of retail space",
            "100+ retail outlets",
            "Multiplex cinema (6 screens)",
            "Food court with 20+ restaurants",
            "Entertainment zone for families",
            "Multi-level parking (500+ vehicles)",
            "Modern HVAC system",
            "Advanced fire safety and security",
            "Escalators and elevators",
            "Sustainable design features"
        ],
        technologies: ["Revit", "ETABS", "MS Project", "BIM 360"],
        images: [
            "assets/images/project5-1.jpg",
            "assets/images/project5-2.jpg",
            "assets/images/project5-3.jpg"
        ],
        links: {
            demo: "#",
            github: "#"
        }
    },
    project6: {
        title: "Water Treatment Plant",
        category: "Infrastructure",
        client: "City Water Authority",
        location: "Your City, Country",
        duration: "20 Months",
        budget: "$4,000,000",
        year: "2021",
        description: "Municipal water treatment facility designed to process 50 MLD (Million Liters per Day). The plant incorporates modern filtration technologies, quality control systems, and automated monitoring. The project ensures clean water supply to urban population while maintaining environmental standards.",
        features: [
            "Processing capacity: 50 MLD",
            "Multi-stage filtration system",
            "Chemical dosing and treatment",
            "Automated SCADA system",
            "Quality testing laboratory",
            "Storage reservoirs (5 ML capacity)",
            "Backup power systems",
            "Environmental monitoring",
            "Staff facilities and control room"
        ],
        technologies: ["AutoCAD", "Civil 3D", "Hydraulic Modeling Software"],
        images: [
            "assets/images/project6-1.jpg",
            "assets/images/project6-2.jpg"
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
    
    // Generate image gallery HTML
    const galleryHTML = project.images.map(img => `
        <div class="gallery-image" onclick="openImageLightbox('${img}')">
            <img src="${img}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300/34495e/ffffff?text=Project+Image'">
        </div>
    `).join('');
    
    // Generate features list
    const featuresHTML = project.features.map(feature => `
        <li><i class="fas fa-check-circle"></i> ${feature}</li>
    `).join('');
    
    // Generate technologies
    const techHTML = project.technologies.map(tech => `
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
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
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
            <img src="${imageSrc}" alt="Project Image">
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

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
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
        formStatus.textContent = 'Sending message...';
        formStatus.className = 'form-status';
        formStatus.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }, 2000);
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentElement.querySelector('.error-message');
    errorElement.textContent = message;
    field.style.borderColor = '#e74c3c';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = contactForm.querySelectorAll('input, textarea');
    
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
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.textContent = '';
        input.style.borderColor = '';
    });
});

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
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img');
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

// You can uncomment this to add typing effect to hero title
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });

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
