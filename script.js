const menuBtn = document.querySelector("#menu-btn");
const menuUl = document.querySelector(".menu");
const buttons = document.querySelector(".buttons");


menuBtn.addEventListener("click", ()=>{
    menuUl.classList.toggle("showData");
    buttons.classList.toggle("showData");
    //console.log(menuUl);
})




document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".section2");
    const leftArrows = document.querySelectorAll(".left-arrow");
    const rightArrows = document.querySelectorAll(".right-arrow");
    const dotsContainer = document.querySelector(".dots-container");

    let currentIndex = 0;
    let autoSlideInterval;

    // Create dots dynamically
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            stopAutoSlide();
            currentIndex = index;
            showSlide(currentIndex);
            startAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Arrow controls
    rightArrows.forEach(arrow => arrow.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    }));

    leftArrows.forEach(arrow => arrow.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    }));

    // Initialize
    showSlide(currentIndex);
    startAutoSlide();
});

