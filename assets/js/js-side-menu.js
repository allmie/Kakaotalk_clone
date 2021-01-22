const sidebarBtn = document.querySelector(".kt__main__side-bar__bottom");
const settingsBtn = sidebarBtn.querySelectorAll("a")[2];
const sideMenu = document.querySelector(".settings__side-menu");

console.dir(settingsBtn);

settingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sideMenu.classList.toggle("clicked");
});
