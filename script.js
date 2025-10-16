// ===== PORTFOLIO DE ALBERT CASTRO - JAVASCRIPT =====

// Variables globales
let currentTheme = localStorage.getItem('theme') || 'light';

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeScrollAnimations();
    initializeContactForm();
    initializeSmoothScroll();
    initializeTypewriter();
});

// ===== SISTEMA DE TEMAS =====
function initializeTheme() {
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // Aplicar tema inicial
    body.setAttribute('data-theme', currentTheme);
    updateThemeButton();

    // Event listener para cambio de tema
    themeBtn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const body = document.body;
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeButton();

    // Animación suave del cambio
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

function updateThemeButton() {
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    themeBtn.setAttribute('aria-label', 
        currentTheme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'
    );
}

// ===== NAVEGACIÓN INTELIGENTE =====
function initializeNavigation() {
    const nav = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    // Header dinámico al hacer scroll
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            nav.style.transform = currentScrollY > lastScrollY ? 
                'translateY(-100%)' : 'translateY(0)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Highlight de navegación activa
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== ANIMACIONES DE SCROLL =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .testimonial, .stat'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate', 'active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ===== SCROLL SUAVE =====
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== EFECTO TYPEWRITER =====
function initializeTypewriter() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                heroTitle.style.borderRight = 'none'; // Remove cursor
            }
        }, 100);

        // Cursor effect
        heroTitle.style.borderRight = '3px solid var(--primary-color)';
        heroTitle.style.animation = 'blink-cursor 1s infinite';
    }
}

// ===== FORMULARIO DE CONTACTO =====
function initializeContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', handleFormSubmit);

        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Validar formulario
    if (!validateForm(data)) {
        return;
    }

    // Simular envío (aquí conectarías con tu backend)
    showSuccessMessage();
    e.target.reset();
}

function validateForm(data) {
    let isValid = true;

    // Validar nombre
    if (!data.name || data.name.trim().length < 2) {
        showError('name', 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showError('email', 'Por favor, ingresa un email válido');
        isValid = false;
    }

    // Validar mensaje
    if (!data.message || data.message.trim().length < 10) {
        showError('message', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }

    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();

    clearErrors(e);

    switch(field.name) {
        case 'name':
            if (value.length < 2) {
                showError('name', 'Nombre muy corto');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError('email', 'Email inválido');
            }
            break;
        case 'message':
            if (value.length < 10) {
                showError('message', 'Mensaje muy corto');
            }
            break;
    }
}

function showError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const formGroup = field.closest('.form-group');

    // Remover error anterior
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Añadir nuevo error
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = 'var(--spacing-xs)';

    formGroup.appendChild(errorElement);
    field.style.borderColor = 'var(--error-color)';
}

function clearErrors(e) {
    const field = e.target;
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');

    if (errorMessage) {
        errorMessage.remove();
    }

    field.style.borderColor = '';
}

function showSuccessMessage() {
    // Crear mensaje de éxito
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background-color: var(--accent-color);
            color: white;
            padding: var(--spacing-md) var(--spacing-lg);
            border-radius: 8px;
            margin-top: var(--spacing-md);
            text-align: center;
            animation: slideInFromTop 0.5s ease;
        ">
            ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
        </div>
    `;

    const form = document.getElementById('contactForm');
    form.appendChild(successDiv);

    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ===== UTILIDADES =====

// Detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Throttle para eventos de scroll
function throttle(func, wait) {
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

// Debounce para campos de formulario
function debounce(func, wait) {
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

// ===== EASTER EGGS =====

// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';

    const message = document.createElement('div');
    message.innerHTML = '🎉 ¡Código Konami activado! Eres un verdadero gamer 🎮';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-size: 1.2rem;
        z-index: 9999;
        animation: bounce 1s infinite;
    `;

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

// ===== ANIMACIONES CSS ADICIONALES =====
const additionalCSS = `
@keyframes blink-cursor {
    0%, 50% { border-color: transparent; }
    51%, 100% { border-color: var(--primary-color); }
}

@keyframes slideInFromTop {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
    40% { transform: translate(-50%, -50%) translateY(-10px); }
    60% { transform: translate(-50%, -50%) translateY(-5px); }
}
`;

// Inyectar CSS adicional
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`⚡ Portfolio cargado en ${loadTime}ms`);

        // Reportar Core Web Vitals si están disponibles
        if ('web-vitals' in window) {
            // Aquí se integrarían las métricas reales
            console.log('📊 Core Web Vitals monitoreados');
        }
    });
}

console.log('🚀 Portfolio de Albert Castro inicializado correctamente');