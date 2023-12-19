function showPage(pageId) {
    var pages = ['home', 'login', 'signup', 'contact'];

    for (var i = 0; i < pages.length; i++) {
        var page = document.getElementById(pages[i]);
        if (pageId === pages[i]) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    }
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your authentication logic here
    alert('Login functionality is not implemented in this example.');
}

function signup() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic password validation
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Add your signup logic here (this is a basic demonstration)
    alert('Signup functionality is not implemented in this example.');
}

function submitContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Add your form submission logic here
    alert('Form submission functionality is not implemented in this example.');
}
