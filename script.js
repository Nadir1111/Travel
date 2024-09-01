const mobile = document.querySelector('.mobile');
const burgerMenu = document.querySelector('.burger_menu');

burgerMenu.addEventListener('click', function() {
    mobile.classList.toggle('moving__list');
    mobile.classList.toggle('hidden__list');

})




