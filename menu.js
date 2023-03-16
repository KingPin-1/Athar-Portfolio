document.addEventListener('DOMContentLoaded', () => {
    const Openbtn = document
        .getElementById('menu-btn')
        .addEventListener('click', showMenu);
    const Closebtn = document
        .getElementById('close-menu')
        .addEventListener('click', closeMenu);
    addClickToMenuItems();
});

function showMenu() {
    const menu = document.getElementById('mobile-links');
    menu.style.height = '100%';
}

function closeMenu() {
    const menu = document.getElementById('mobile-links');
    menu.style.height = '0%';
}

function addClickToMenuItems() {
    const menuLinks = document.querySelectorAll('section#mobile-links a');
    for (let menuLink of menuLinks) {
        menuLink.addEventListener('click', closeMenu);
    }
}
