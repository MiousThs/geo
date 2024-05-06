const modal = document.getElementById("modal");
const sideMenu = document.getElementById('menu');

const btn = document.getElementById("contactBtn");
const btn2 = document.getElementById("contactBtn2");
const btn3 = document.getElementById("contactBtn3");
const btn4 = document.getElementById("contactBtn4");

const mobBtn = document.getElementById("mobContactBtn");
const mobBtn2 = document.getElementById("mobContactBtn2");
const mobBtn3 = document.getElementById("mobContactBtn3");
const mobBtn4 = document.getElementById("mobContactBtn4");

const span = document.getElementsByClassName("close")[0];
const menuClose = document.getElementsByClassName("menu-close")[0];
const menuNavs = document.getElementsByClassName('menu-nav-item');

btn.onclick = function() {
    modal.style.display = "flex";
}
btn2.onclick = function() {
    modal.style.display = "flex";
}
btn3.onclick = function() {
    modal.style.display = "flex";
}
btn4.onclick = function() {
    modal.style.display = "flex";
}

mobBtn.onclick = function() {
    modal.style.display = "flex";
}
mobBtn2.onclick = function() {
    modal.style.display = "flex";
}
mobBtn3.onclick = function() {
    modal.style.display = "flex";
}
mobBtn4.onclick = function() {
    modal.style.display = "flex";
    sideMenu.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

menuClose.onclick = function() {
    sideMenu.style.display = "none";
}

for (let i = 0; i < menuNavs.length; i++) {
    menuNavs[i].addEventListener('click', function() {
        sideMenu.style.display = "none";
    });
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == sideMenu) {
        sideMenu.style.display = "none";
    }
}

const menuIcon = document.getElementById('sideMenuIcon');

menuIcon.addEventListener('click', function() {
    sideMenu.style.display = "flex";
});
