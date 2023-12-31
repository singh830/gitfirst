const apiUrl = "https://crudcrud.com/api/0933ebc0a37a49e2b0f72780263fd8f8/appointmentsDate"; // Replace with your actual API endpoint

function editUser(userId) {
  // Fetch user details from crudcrud.com
  axios.get(`${apiUrl}/${userId}`)
    .then(response => {
      const user = response.data;
      // Populate the edit form with user details
      document.getElementById('editName').value = user.name;
      document.getElementById('editEmail').value = user.email;
      document.getElementById('editPhone').value = user.phone;
    })
    .catch(error => {
      console.error("Error fetching user details for editing:", error);
    });
}

// Handle form submission for editing
document.getElementById('editForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const userId = /* Get the user ID */;
  const editedUser = {
    name: document.getElementById('editName').value,
    email: document.getElementById('editEmail').value,
    phone: document.getElementById('editPhone').value,
    // Add other user details
  };

  // Perform PUT or PATCH request to update user details
  axios.put(`${apiUrl}/${userId}`, editedUser)
    .then(response => {
      console.log("User details successfully updated:", response.data);
      // Update the website with new user details
      // (You may need to handle this part based on your UI implementation)
    })
    .catch(error => {
      console.error("Error updating user details:", error);
    });
});
