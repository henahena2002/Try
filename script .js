function registerUser() {
    var newUsername = document.getElementById("newUsername").value;
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("newPassword").value;
    var termsCheckbox = document.getElementById("termsCheckbox");

    if (newUsername !== "" && email !== "" && newPassword !== "" && termsCheckbox.checked) {
        // Add your registration logic here, such as sending the data to a server or storing it locally
        alert("Registration successful. Redirecting...");
        
        // Redirect to your GitHub link after registration
        window.location.href = "https://wenifredodoctor.github.io/2QM6-NAVIGATION-BAR-AND-FAVICON/"; // Replace with your GitHub link
        return false; // Prevent the form submission
    } else {
        alert("Please fill in all the required fields and agree to the terms and conditions.");
        return false; // Prevent the form submission
    }
}
