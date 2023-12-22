function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect user details
    var userDetails = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Optional: Display a confirmation message
    alert('User details submitted successfully!');
}

// Attach the handleSubmit function to the form's submit event
document.getElementById('userForm').addEventListener('submit', handleSubmit);

