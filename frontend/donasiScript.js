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

let allUsers = [];

fetch("http://localhost:3000/users")
  .then(response => response.json())
  .then(data => {
    allUsers = data;
  })
  .catch(err => {
    console.error("Gagal mengambil data user:", err);
});

fetch("http://localhost:3000/donation")
  .then(response => response.json())
  .then(data => {
    showDonasi(data); 
  })
  .catch(err => {
    console.error("Gagal mengambil data donasi:", err);
});

function showDonasi(data) {
    const container = document.getElementsByClassName("tableDonasi")[0];
    container.innerHTML = "";
    const totalDonasi = {};
  
    data.forEach(donasi => {
      if (donasi.status == "Completed"){
        if (totalDonasi[donasi.user_id]) {
            totalDonasi[donasi.user_id] += Number(donasi.amount);
          } else {
            totalDonasi[donasi.user_id] = Number(donasi.amount);
          }
      }
    });

    allUsers.forEach(donasi => {
        const baris = document.createElement("tr");
        baris.innerHTML = `
        <th class="donatur">${donasi.username}</th>
        <th class="total">${totalDonasi[donasi.id]}</th>
        `;
        container.appendChild(baris);
    });
}