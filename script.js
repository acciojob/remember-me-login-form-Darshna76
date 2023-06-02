const form = document.getElementById('loginForm');
  const checkbox = document.getElementById('checkbox');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (checkbox.checked) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('username');
    }

    alert('Logged in as ' + username);

    // Check if there are saved details
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      const existingButton = document.createElement('button');
      existingButton.id = 'existing';
      existingButton.textContent = 'Login as existing user';

      existingButton.addEventListener('click', function() {
        alert('Logged in as ' + savedUsername);
      });

      form.appendChild(existingButton);
    }
  });

  const rememberMe = localStorage.getItem('rememberMe');
  if (rememberMe === 'true') {
    checkbox.checked = true;
  }