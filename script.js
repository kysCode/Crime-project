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
        //secondPageOpened();
        return; // Exit function early
    }

    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Show the success message or the second page
    document.getElementById('successMessage').style.display = 'block';

    document.getElementById('reportForm').style.display = 'block';

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

/*
function handleForm() {
    document.getElementById('crimeForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var crimeType = document.getElementById('crimeType').value;
        var description = document.getElementById('description').value;

        // Here you can handle the form data, such as submitting it via AJAX or processing it further
        console.log('Crime Type:', crimeType);
        console.log('Description:', description);

        // Optionally, you can clear the form fields after submission
        document.getElementById('crimeType').value = '';
        document.getElementById('description').value = '';

        // You can add further logic here, such as displaying a confirmation message
    });
}
*/
