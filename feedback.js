function submitForm(event) {
    event.preventDefault();  // Prevent form from actually submitting

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Phone = document.getElementById('Phone').value;

    // Check if both fields are filled out
    if (name && email && Phone) {
      // Show success message
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('errorMessage').style.display = 'none';
      
      // Clear the form fields
      document.getElementById('contactForm').reset();
    } else {
      // Show error message if fields are not filled
      document.getElementById('successMessage').style.display = 'none';
      document.getElementById('errorMessage').style.display = 'block';
    }
  }