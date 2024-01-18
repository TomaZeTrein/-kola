<body>
    <header>
        <h1>User Application</h1>
        <nav>
            <button onclick="switchAction('registration')">Register</button>
            <button onclick="switchAction('login')">Login</button>
            <button onclick="switchAction('listing')">List Users</button>
        </nav>
    </header>
    <main>
        <div id="registrationForm" style="display: none;">
            <h2>Registration</h2>
            <form onsubmit="registerUser(event)">
                <label for="name">Name:</label>
                <input type="text" id="name" required>

                <label for="surname">Surname:</label>
                <input type="text" id="surname" required>

                <label for="username">Username:</label>
                <input type="text" id="username" required>

                <label for="password">Password:</label>
                <input type="password" id="password" required>

                <label for="age">Age:</label>
                <input type="number" id="age" required>

                <label for="gender">Gender:</label>
                <select id="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label for="status">User Status:</label>
                <select id="status" required>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>

        <div id="loginForm" style="display: none;">
            <h2>Login</h2>
            <form onsubmit="loginUser(event)">
                <label for="loginUsername">Username:</label>
                <input type="text" id="loginUsername" required>

                <label for="loginPassword">Password:</label>
                <input type="password" id="loginPassword" required>

                <button type="submit">Login</button>
            </form>
        </div>

        <div id="userListing" style="display: none;">
            <h2>User Listing</h2>
            <ul id="userList"></ul>
        </div>
    </main>

    <script>
        function switchAction(action) {
            document.getElementById('registrationForm').style.display = (action === 'registration') ? 'block' : 'none';
            document.getElementById('loginForm').style.display = (action === 'login') ? 'block' : 'none';
            document.getElementById('userListing').style.display = (action === 'listing') ? 'block' : 'none';
        }

        function registerUser(event) {
            event.preventDefault();
        }

        function loginUser(event) {
            event.preventDefault();
        }

    </script>
</body>