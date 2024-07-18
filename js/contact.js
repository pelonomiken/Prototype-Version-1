document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact_btn');
    const contactForm = document.querySelector('.contact-container');
    const overlay = document.querySelector('.overlay');
    const cancelBtn = document.querySelector('.btn-cancel');

    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        contactForm.style.display = 'flex';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function() {
        contactForm.style.display = 'none';
        overlay.style.display = 'none';
    });

    cancelBtn.addEventListener('click', function() {
        contactForm.style.display = 'none';
        overlay.style.display = 'none';
    });
});

