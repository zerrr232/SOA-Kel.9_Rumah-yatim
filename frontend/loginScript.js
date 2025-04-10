document.getElementById('inputs').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));

        window.location.href = 'index.html';
      } else {
        document.getElementById('loginError').innerText = data.message || 'Login gagal';
      }
    } catch (err) {
      console.error('Login error:', err);
      document.getElementById('loginError').innerText = 'Terjadi kesalahan.';
    }
  });