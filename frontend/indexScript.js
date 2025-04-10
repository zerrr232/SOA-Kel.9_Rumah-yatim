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

let allPanti = [];

const map = L.map('mapShow').setView([-6.2, 106.8], 11); // Koordinat default (Jakarta)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

fetch("http://localhost:3000/rumah_yatim")
  .then(response => response.json())
  .then(data => {
    allPanti = data; // simpan semua data untuk pencarian
    showPanti(data); // tampilkan semua panti saat pertama kali
  })
  .catch(err => {
    console.error("Gagal mengambil data:", err);
  });
const markerGroup = L.layerGroup().addTo(map);

function showPanti(data) {
  const container = document.getElementsByClassName("cardContainer")[0];
  const mapShow = document.getElementById("mapShow");
  container.innerHTML = ""; // hapus isi sebelumnya
  markerGroup.clearLayers();

  data.forEach(panti => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="asset/Media.png">
      <div class="content">
        <div class="header">
          <h1>${panti.nama_panti}</h1>
          <span>${panti.nama_kota}</span>
        </div>
        <div class="desc">
          <span>${panti.alamat}</span>
        </div>
        <div class="button">
          <button onclick="">Lihat</button>
        </div>
      </div>
    `;
    container.appendChild(card);

    const marker = L.marker([panti.latitude, panti.longtitude])
        .bindPopup(`<b>${panti.nama_panti}</b><br>${panti.alamat}`);
      markerGroup.addLayer(marker);
  });
}

// Event listener untuk search box
document.getElementById("cariPanti").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = allPanti.filter(panti =>
    panti.nama_panti.toLowerCase().includes(keyword)
  );
  showPanti(filtered); // tampilkan yang cocok saja
});

document.getElementById("cariKota").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = allPanti.filter(panti =>
    panti.nama_kota.toLowerCase().includes(keyword)
  );
  showPanti(filtered); // tampilkan yang cocok saja
});