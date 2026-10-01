// ===== DATOS DE PRODUCTOS =====
const productos = [
    {
        nombre: "Rosa Nocturna",
        categoria: "Floral",
        precio: "$45.00",
        imagen: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400"
    },
    {
        nombre: "Vainilla Cálida",
        categoria: "Oriental",
        precio: "$52.00",
        imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400"
    },
    {
        nombre: "Cítrico Fresco",
        categoria: "Fresco",
        precio: "$38.00",
        imagen: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400"
    },
    {
        nombre: "Madera Noble",
        categoria: "Amaderado",
        precio: "$58.00",
        imagen: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400"
    }
];

// ===== RENDER DE PRODUCTOS =====
function renderProductos() {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;
    
    grid.innerHTML = productos.map(p => `
        <article class="producto-card">
            <div class="producto-imagen">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
            </div>
            <div class="producto-info">
                <p class="producto-categoria">${p.categoria}</p>
                <h3 class="producto-nombre">${p.nombre}</h3>
                <p class="producto-precio">${p.precio}</p>
            </div>
        </article>
    `).join('');
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== FORMULARIO =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te contactaremos pronto. 🌸');
        contactForm.reset();
    });
}

// ===== ANIMACIONES AL SCROLL =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animación a las cards
document.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    
    const animables = document.querySelectorAll('.nosotros-card, .producto-card');
    animables.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        observer.observe(el);
    });
});