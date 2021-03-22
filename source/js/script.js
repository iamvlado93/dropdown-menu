let burger = document.getElementById('burger');
let navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display ='none';
    }
})
