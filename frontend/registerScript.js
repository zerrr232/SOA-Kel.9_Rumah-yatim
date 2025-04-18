document.getElementById('inputs').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    if (password == cpassword){
        try {
            const token = grecaptcha.getResponse();

            const response = await fetch('http://localhost:3000/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({username, password, token })
            });
      
            const data = await response.json();
      
            if (response.ok) {
              window.location.href = 'login.html';
            } else {
              document.getElementById('loginError').innerText = data.message || 'Gagal membuat akun';
            }
          } catch (err) {
            console.error('Login error:', err);
            document.getElementById('loginError').innerText = 'Terjadi kesalahan.';
          }
    } else{
        document.getElementById('loginError').innerText = 'Gagal konfirmasi password';
    }
  });