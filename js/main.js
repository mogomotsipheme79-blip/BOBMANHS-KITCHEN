// BobManhs Kitchen Part 3 - Fixed for REAL MENU
document.addEventListener('DOMContentLoaded', () => {
    // TABS
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).style.display = 'block';
        });
    });
    // ACCORDION
    document.querySelectorAll('.accordion-header').forEach(h => {
        h.addEventListener('click', () => {
            const b = h.nextElementSibling;
            b.style.display = b.style.display === 'block' ? 'none' : 'block';
        });
    });
    // MODAL
    const modal = document.getElementById('orderModal');
    const openBtn = document.getElementById('openModalBtn');
    if (openBtn) openBtn.onclick = () => modal.style.display = 'block';
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

    // DYNAMIC MENU FOR YOUR REAL FOOD
    const menuData = [
        { name: 'Chicken & Chips', cat: 'chicken', price: 'R65', desc: 'Golden fried chicken with crispy chips', img: 'images/chicken.jpg' },
        { name: 'Beef Burger', cat: 'burger', price: 'R70', desc: 'Juicy beef with fresh toppings and chips', img: 'images/burger.jpg' },
        { name: 'Chicken Burger', cat: 'burger', price: 'R65', desc: 'Grilled chicken with salad and sauce', img: 'images/burger.jpg' },
        { name: 'Beef Stew', cat: 'stew', price: 'R80', desc: 'Tender stew with rice and veg', img: 'images/restaurant.jpg' },
        { name: 'Breakfast', cat: 'breakfast', price: 'R55', desc: 'Eggs, bacon, toast and veg', img: 'images/dessert.jpg' },
        { name: 'Soft Drink', cat: 'drink', price: 'R20', desc: 'Cold soft drinks', img: 'images/drink.jpg' }
    ];
    const container = document.getElementById('dynamicMenu');
    const search = document.getElementById('menuSearch');
    function render(list) {
        if (!container) return;
        container.innerHTML = list.map(i => `<div class="menu-card" style="border:1px solid #ddd; padding:12px; border-radius:8px;"><img src="${i.img}" alt="${i.name} Pretoria" style="width:100%; height:120px; object-fit:cover;"><h4>${i.name}</h4><p>${i.desc}</p><b>${i.price}</b></div>`).join('');
    }
    if (container) render(menuData);
    if (search) search.addEventListener('input', () => { const q = search.value.toLowerCase(); render(menuData.filter(m => m.name.toLowerCase().includes(q))); });

    // LIGHTBOX
    const lb = document.getElementById('lightbox'); const lbImg = document.getElementById('lightboxImg');
    document.querySelectorAll('.gallery-img').forEach(img => { img.addEventListener('click', () => { lbImg.src = img.src; lb.style.display = 'flex'; }); });
    if (lb) lb.addEventListener('click', () => lb.style.display = 'none');

    // MAP - Leaflet Pretoria
    if (document.getElementById('map')) {
        const map = L.map('map').setView([-25.7479, 28.2293], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);
        L.marker([-25.7479, 28.2293]).addTo(map).bindPopup('BobManhs Kitchen, Pretoria').openPopup();
    }
});