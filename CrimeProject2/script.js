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

function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the value entered by the user
    var userInput = document.getElementById("crimeForm").value;
    
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
    
    // Create a text node with the user input
    var textNode = document.createTextNode(userInput);
    
    // Append the text node to the paragraph element
    newParagraph.appendChild(textNode);
    
    // Append the paragraph element to the result div
    document.getElementById("result").appendChild(newParagraph);
    
    // Clear the input field after displaying the input
    document.getElementById("crimeForm").value = "";

    showDashboard();
}


function savePost(crimeType, description) {
    var posts = JSON.parse(localStorage.getItem('posts')) || [];
    var newPost = { crimeType: crimeType, description: description };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function displayPosts() {

    var dashboard = document.getElementById('dashboard');
    var postList = document.getElementById('postList');
    var posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Clear previous posts
    postList.innerHTML = '';

    savePost(document.getElementById('crimeType').value, document.getElementById('description').value);

    
    if (posts.length > 0) {
        // Display each post
        posts.forEach(function(post) {
            var listItem = document.createElement('li');
            listItem.textContent = `Crime Type: ${post.crimeType}, Description: ${post.description}`;
            postList.appendChild(listItem);
        });
        // Show the dashboard
        dashboard.style.display = 'block';
    } else {
        // Hide the dashboard if there are no posts
        dashboard.style.display = 'none';
    }

    // Save posts to localStorage
     // call savePost here if you want to save every time you display
}


function showDashboard() {
    displayPosts();
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('reportForm').style.display = 'none';
}



function hideInputBox() {
    var reportFormSection = document.getElementById('reportForm');
    
    if (reportFormSection.style.display === 'none') {
        safetyTipsSection.style.display = 'block';
    } else {
        reportFormSection.style.display = 'none';
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