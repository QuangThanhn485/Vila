document.addEventListener('DOMContentLoaded', function () {
    // Auto slider
    const slides = document.querySelectorAll('.slide__slide');
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

function embedIframe() {
    document.getElementById('embed-area').innerHTML = `
        <iframe class="w-100 h-100" src="https://www.youtube.com/embed/LygvirdTB3s?autoplay=1" title="Nha Trang Flycam 2021 - Mavic Air 2 4K | Nào Ta Cùng Đi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
    menu.style.transform = menu.style.transform === 'translateX(0px)' ? 'translateX(20px)' : 'translateX(0px)';
    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    // menu.style.width = menu.style.width === '400px' ? '0' : '400px';
    if (menu.style.width != '0px' &&  menu.style.width != '')
    {
        setTimeout(()=>menu.style.width='0',500)
    }
    else {
        menu.style.width = 'min(400px,100vw)'
    }
}
