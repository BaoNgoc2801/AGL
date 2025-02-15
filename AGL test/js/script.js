const toggleMenu = document.getElementById("toggleMenu");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
toggleMenu.addEventListener("click", function () {
    sideMenu.style.display = "block";
    toggleMenu.style.display = "none";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
    sideMenu.style.display = "none";
    toggleMenu.style.display = "block";
    closeMenu.style.display = "none";
});
