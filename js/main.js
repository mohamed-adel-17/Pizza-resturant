// Swiper Start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    speed: 400,
    spaceBetween: 100,

    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// Swiper end

//  links 
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active')
    })
})

// OWL carousel Start
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
})
// OWL carousel end

// Slider Start
let gallaryImgs = Array.from(document.querySelectorAll(".main-content .gallary-img"));
let gallarySliderContainer = document.querySelector('.gallarySliderContainer')
let gallarySlider = document.querySelector('.gallarySlider')
let currentImgIndex

const prevBtn = document.getElementById('prevBtn')
const closeBtn = document.getElementById('closeBtn')
const nextBtn = document.getElementById('nextBtn')

for (let i = 0; i < gallaryImgs.length; i++) {
    gallaryImgs[i].addEventListener('click', function img(e) {
        let imgsrc = e.target.src
        currentImgIndex = gallaryImgs.indexOf(e.target)
        console.log(currentImgIndex)
        gallarySliderContainer.style.display = 'flex';
        gallarySlider.style.backgroundImage = `url(${imgsrc})`
        // console.log(slideeBtnClose)
    })
};

closeBtn.addEventListener('click', function () {
    gallarySliderContainer.style.display = 'none';
})

nextBtn.addEventListener('click', () => {
    currentImgIndex = currentImgIndex + 1
    if (currentImgIndex >= gallaryImgs.length) {
        currentImgIndex = 0
    }
    nextSlideSrc = gallaryImgs[currentImgIndex].src
    gallarySlider.style.backgroundImage = `url(${nextSlideSrc})`
})

prevBtn.addEventListener('click', () => {
    currentImgIndex = currentImgIndex - 1
    if (currentImgIndex < 0) {
        currentImgIndex = gallaryImgs.length - 1
    }
    nextSlideSrc = gallaryImgs[currentImgIndex].src
    gallarySlider.style.backgroundImage = `url(${nextSlideSrc})`
})
// Slider end

// loading start
let ourMenuSection = document.querySelector(".ourMenu")
let menuHeader = document.querySelector(".ourMenu #menuHeader")
let boxs = document.querySelectorAll('.ourMenu .box')
let boxies = document.querySelectorAll('.ourMenu .box2')

window.onscroll = function (){
    if(window.scrollY >= ourMenuSection.offsetTop -550){
        menuHeader.style.fontSize = `45px`
        boxs.forEach((box)=>{
            box.style.transform = `translateY(0)`;
        })
        boxies.forEach((box)=>{
            box.style.transform = `translateX(0)`;
        })
    }
}
// loading End



