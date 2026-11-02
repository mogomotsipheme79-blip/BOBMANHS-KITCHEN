// BOBMANHS KITCHEN - Part 3 Full JS

// 1. MAP - Contact Page
const mapDiv = document.getElementById('map');
if (mapDiv) {
    const map = L.map('map').setView([-25.7479, 28.2293], 13); // Pretoria
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);
    L.marker([-25.7479, 28.2293]).addTo(map)
        .bindPopup('BOBMANHS KITCHEN<br>Good Food. Good Vibes.')
        .openPopup();
}

// 2. LIGHTBOX - Gallery Page
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery img, .food-card img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

// 3. ACCORDION - About Page FAQ
document.querySelectorAll('.faq-question, .accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// 4. MENU SEARCH FILTER
const searchBox = document.getElementById('searchBox');
if (searchBox) {
    searchBox.addEventListener('input', () => {
        const filter = searchBox.value.toLowerCase();
        document.querySelectorAll('.food-card').forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(filter) ? '' : 'none';
        });
    });
}

// 5. Form Validation - Contact Page
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const email = contactForm.querySelector('input[type="email"]');
        if (email && !email.value.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email address');
        }
    });
}