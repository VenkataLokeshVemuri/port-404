document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is fully loaded');

    function showAlert() {
        alert('Hello, welcome to Port 404!');
    }

    document.getElementById('alertButton').addEventListener('click', showAlert);

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
        contactForm.reset();
    });
});
