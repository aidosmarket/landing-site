const menu = document.getElementById("buttonNavbarNavDropdown");
const header = document.querySelector(".header");
const navImage = document.getElementById("navbarImage");

menu.addEventListener("click", () => {
  const collapsedMenu = menu.classList.contains("collapsed");

  if (collapsedMenu) {
    header.classList.remove("white");
    navImage.src = "/assets/images/burger_menu.svg";
  } else {
    header.classList.add("white");
    navImage.src = "/assets/images/close_icon.svg";
  }
});
