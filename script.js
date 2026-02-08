// Sidebar toggle
document.getElementById("toggleSidebar").onclick = () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
};

// Theme toggle + icon
const body = document.body;
const themeBtn = document.getElementById("themeToggle");

function updateIcon() {
  themeBtn.textContent = body.classList.contains("light") ? "🌞" : "🌙";
}

if (localStorage.theme === "light") {
  body.classList.add("light");
}
updateIcon();

themeBtn.onclick = () => {
  body.classList.toggle("light");
  localStorage.theme = body.classList.contains("light") ? "light" : "dark";
  updateIcon();
};

// Search filter
document.getElementById("searchInput").addEventListener("keyup", e => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll("#orderTable tbody tr").forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(value)
      ? ""
      : "none";
  });
});

// Sorting
let asc = true;
document.getElementById("sortAmount").onclick = () => {
  const rows = Array.from(document.querySelectorAll("#orderTable tbody tr"));
  rows.sort((a, b) => {
    const A = +a.children[2].innerText;
    const B = +b.children[2].innerText;
    return asc ? A - B : B - A;
  });
  asc = !asc;
  rows.forEach(r =>
    document.querySelector("#orderTable tbody").appendChild(r)
  );
};

// Static chart
const ctx = document.getElementById("salesChart").getContext("2d");
const data = [120, 180, 150, 210, 170, 190];

data.forEach((value, i) => {
  ctx.fillStyle = "#a855f7";
  ctx.fillRect(i * 60 + 20, 200 - value, 30, value);
});
