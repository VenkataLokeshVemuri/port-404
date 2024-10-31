document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is fully loaded');

    // Example function to display an alert
    function showAlert() {
        alert('Hello, welcome to Port 404!');
    }

    // Add event listener to a button
    document.getElementById('alertButton').addEventListener('click', showAlert);
});
