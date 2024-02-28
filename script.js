function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var crimeLocation = document.getElementById('crimeLocation').value;

    localStorage.setItem('crimeLocation', crimeLocation);

    // Check if all fields are filled
    if (name.trim() === '' || email.trim() === '' || crimeLocation.trim() === '') {
        // Display error message
        document.getElementById('errorMessage').style.display = 'block';
        return; // Exit function early
    }

    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Show the success message or the second page
    document.getElementById('successMessage').style.display = 'block';
}

function showSafetyTips() {
    // Toggle display of safety tips section
    var safetyTipsSection = document.getElementById('safetyTips');
    if (safetyTipsSection.style.display === 'none') {
        safetyTipsSection.style.display = 'block';
    } else {
        safetyTipsSection.style.display = 'none';
    }
}
