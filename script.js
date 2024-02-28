function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var crimeLocation = document.getElementById('crimeLocation').value;

    // Here you can perform any necessary validation or submission process
    // For demonstration, let's assume the form is submitted successfully

    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Show the success message or the second page
    document.getElementById('successMessage').style.display = 'block';
}