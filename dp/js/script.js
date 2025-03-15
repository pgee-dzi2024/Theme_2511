// Избиране на елементите
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

// При клик върху бутона
menuToggle.addEventListener('click', () => {
    if (mainMenu.classList.contains('d-none')) {
        mainMenu.classList.remove('d-none');
        mainMenu.classList.add('d-flex', 'flex-column', 'text-center', 'bg-primary', 'p-3');
    } else {
        mainMenu.classList.remove('d-flex', 'flex-column', 'text-center', 'bg-primary', 'p-3');
        mainMenu.classList.add('d-none');
    }
});

// Получаваме елемента на бутона
const backToTopButton = document.getElementById('backToTop');

// Показване на бутона при скролиране надолу
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Превъртане до началото при натискане на бутона
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавно превъртане
    });
});