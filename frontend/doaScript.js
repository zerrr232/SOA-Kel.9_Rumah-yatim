window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      document.getElementById('login').innerHTML = `
        <span>👤 ${user.username}</span>
        <button onclick="logout()">Logout</button>
      `;
    } else {
      document.getElementById('login').innerHTML = '<a href="login.html">Login</a>';
    }
  };
  
function logout() {
    localStorage.removeItem('user');
    location.reload(); 
}


fetch("http://localhost:3000/doa")
  .then(response => response.json())
  .then(data => {
    showDoa(data); 
  })
  .catch(err => {
    console.error("Gagal mengambil data:", err);
});

function showDoa(data) {
    const container = document.getElementsByClassName("listDoa")[0];
    container.innerHTML = "";
  
    data.forEach(doa => {
      const card = document.createElement("div");
      card.className = "doa";
      card.innerHTML = `
        <h1 class="namaDoa">${doa.nama_doa}</h1>
        <p class="isiDoa">${doa.isi_doa}</p>
        <p class="latin">${doa.latin}</p>
        <p class="arti">${doa.arti}</p>
      `;
      container.appendChild(card);
    });
}