
function showSection(sectionId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

function goToLogin() {
  alert("¡Registro exitoso!");
  showSection('login');
}

function login() {
  alert("¡Bienvenido a Emm Spa!");
  showSection('mainApp');
  showTab('home');
}

function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");

  document.querySelectorAll("nav ul li").forEach(li => li.classList.remove("active-tab"));
  const tabItem = Array.from(document.querySelectorAll("nav ul li")).find(li => li.textContent.toLowerCase().includes(tabId.toLowerCase()));
  if (tabItem) tabItem.classList.add("active-tab");
}