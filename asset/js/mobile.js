function toggleMenu() {
    var navbarLinks = document.querySelector(".navbar-links");
    if (window.getComputedStyle(navbarLinks).display === "none" || window.getComputedStyle(navbarLinks).display === "hidden") {
        navbarLinks.style.display = "flex";
        navbarLinks.style.justifyContent = "center"; // Đặt căn giữa
    } else {
        navbarLinks.style.display = "none";
    }
}

// Hàm để mở và đóng các mục submenu
function toggleSubMenu(event) {
    event.stopPropagation(); 
    var submenu = event.target.nextElementSibling; 
    if (window.getComputedStyle(submenu).display === "none" || window.getComputedStyle(submenu).display === "hidden") {
        submenu.style.display = "block";
        submenu.style.justifyContent = "center"; // Đặt căn giữa
    } else {
        submenu.style.display = "none";
    }
}
