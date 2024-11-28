function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/*feedback*/
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    
    if (name === '' || email === '' || feedback === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    alert('Feedback submitted successfully!');
    // Here you can add code to send the form data to the server
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}