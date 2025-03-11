/**
   * SHOW AND HIDE PASSWORD
   */
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = event.target;
  
    if (passwordField.type === "password") {
        passwordField.type = "text"; 
        toggleIcon.textContent = "🙈"; 
        toggleIcon.title = "Hide Password"; // Tooltip
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "👁️";
        toggleIcon.title = "Show Password"; // Tooltip
    }
  }
  document.querySelector('form').addEventListener('submit', function() {
    document.getElementById('spinner').style.display = 'block';
});
