const apiUrl = "https://crudcrud.com/api/0933ebc0a37a49e2b0f72780263fd8f8/appointmentsDate";

function deleteUser(userId) {
  const confirmation = confirm("Are you sure you want to delete this user?");
  
  if (confirmation) {
    // Perform DELETE request to crudcrud.com
    axios.delete(`${apiUrl}/${userId}`)
      .then(response => {
        console.log("User successfully deleted:", response.data);
        
        // Remove the user detail from the website
        const userElement = document.getElementById(userId);
        if (userElement) {
          userElement.remove();
        } else {
          console.error("User element not found.");
        }
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  }
}
