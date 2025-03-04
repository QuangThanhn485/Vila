document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.menu-trigger');
    const menu = document.querySelector('.menu');

    menuTrigger.addEventListener('click', () => {
        menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
        menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    });

    // Auto slider
    const slides = document.querySelectorAll('.splide__slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    showSlide(currentSlide);
    setInterval(nextSlide, 9000);
});
