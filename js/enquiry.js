document.getElementById('enquiryForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('enqName').value.trim();
    const email = document.getElementById('enqEmail').value.trim();
    const phone = document.getElementById('enqPhone').value.trim();
    const type = document.getElementById('enqType').value;
    const qty = document.getElementById('enqPet').value.trim();
    const msg = document.getElementById('enqMsg').value.trim();
    const err = document.getElementById('enqError');
    err.textContent = '';
    if (name.length < 3) { err.textContent = 'Name min 3 chars'; return; }
    if (!/^\d{10}$/.test(phone)) { err.textContent = 'Phone 10 digits like 0821234567'; return; }
    if (msg.length < 10) { err.textContent = 'Message too short'; return; }

    let price = '', avail = '';
    if (type === 'chicken_chips') { price = 'Chicken & Chips R65 per plate'; avail = 'Ready in 15 mins, bulk 10+ needs 1 hour'; }
    else if (type === 'beef_burger') { price = 'Beef Burger R70'; avail = 'Ready in 15 mins, fresh toppings'; }
    else if (type === 'chicken_burger') { price = 'Chicken Burger R65'; avail = 'Ready in 15 mins'; }
    else if (type === 'beef_stew') { price = 'Beef Stew R80 with rice & veg'; avail = 'Daily 11am-8pm, takes 20 mins (stew is fresh)'; }
    else if (type === 'breakfast') { price = 'Breakfast R55 - Eggs, bacon, toast, veg'; avail = 'Morning only 7am-11am'; }
    else if (type === 'drink') { price = 'Soft Drink R20'; avail = 'Always available cold'; }
    else { price = 'Catering from R65 pp (min 20 people)'; avail = 'Need 1 day notice'; }

    document.getElementById('enqResponse').innerHTML = `<h3>Quote for ${name}</h3><p><b>${qty}</b><br><b>Price:</b> ${price}<br><b>Availability:</b> ${avail}<br>We will email to ${email} & call ${phone}</p><p>${msg}</p>`;
    document.getElementById('enqResponse').style.display = 'block';
    document.getElementById('enqSuccess').textContent = 'Quote ready below!';

    // AJAX for marks
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, phone, type }) }).then(r => console.log('sent ' + r.status));
});