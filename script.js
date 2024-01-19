document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const userList = document.getElementById('user-list');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const listUsersLink = document.getElementById('list-users-link');

    registerLink.addEventListener('click', showRegisterForm);
    loginLink.addEventListener('click', showLoginForm);
    listUsersLink.addEventListener('click', showUserList);

    function showRegisterForm() {
        hideAllForms();
        document.getElementById('register-form').style.display = 'block';
    }

    function showLoginForm() {
        hideAllForms();
        document.getElementById('login-form').style.display = 'block';
    }

    function showUserList() {
        hideAllForms();
        displayUserList();
        document.getElementById('user-list').style.display = 'block';
    }

    function hideAllForms() {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-list').style.display = 'none';
    }

    function displayUserList() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userListElement = document.getElementById('user-list');

        if (users.length === 0) {
            userListElement.innerHTML = '<p>No users found.</p>';
        } else {
            let userListHTML = '<ul>';
            users.forEach(user => {
                userListHTML += `<li>${user.username} - ${user.status}</li>`;
            });
            userListHTML += '</ul>';
            userListElement.innerHTML = userListHTML;
        }
    }

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const firstName = document.getElementById('register-first-name').value;
        const lastName = document.getElementById('register-last-name').value;
        const age = document.getElementById('register-age').value;
        const gender = document.getElementById('register-gender').value;

        if (!username || !password || !firstName || !lastName || !age || !gender) {
            alert('All fields are required for registration.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            alert('Username is already taken. Please choose another one.');
            return;
        }

        const newUser = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            status: 'active',
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('registration-form').reset();

        alert('Registration successful!');
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginUsername = document.getElementById('login-username').value;
        const loginPassword = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const loginUser = users.find(user => user.username === loginUsername);

        if (!loginUser) {
            alert('User not found. Please check your username.');
            return;
        }

        if (loginUser.password !== loginPassword) {
            alert('Incorrect password. Please try again.');
            return;
        }

        alert('Login successful!');
    });
});