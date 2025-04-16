 // Array of words for typing effect
 const typingWords = ["Experience", "Journey", "Taste", "Passion"];
 const heroImages = [
     "./images/bg2.jpg",
     "./images/bg3.jpg",
     "./images/bg1.jpg",
     "./images/bg4.jpg"
 ];

 let currentIndex = 0;
 const typingText = document.getElementById("typing-text");
 const heroText = document.getElementById("hero-text");
 const heroSubtitle = document.getElementById("hero-subtitle");
 const heroBg = document.getElementById("hero-bg");
 const heroBgNext = document.getElementById("hero-bg-next");

 function changeHeroContent() {
     // Start Fade Out Effect
     heroText.classList.add("fade-out");
     heroBgNext.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
     heroBgNext.classList.add("fade-in");

     setTimeout(() => {
         // Change Text Content
         typingText.innerText = typingWords[currentIndex];
         heroSubtitle.innerText = `Indulge in the ${typingWords[currentIndex].toLowerCase()} of freshly brewed coffee.`;

         // Restart Typing Animation
         typingText.style.animation = "none";
         void typingText.offsetWidth;  // Reset animation
         typingText.style.animation = "typing 2s steps(10, end) forwards, blink 0.7s infinite";

         // Swap Backgrounds Smoothly
         heroBg.style.backgroundImage = heroBgNext.style.backgroundImage;
         heroBgNext.classList.remove("fade-in");

         // Fade In Text Again
         heroText.classList.remove("fade-out");

         // Move to Next Index
         currentIndex = (currentIndex + 1) % typingWords.length;
     }, 800); // Match transition timing
 }

 // Change Content Every 5 Seconds
 setInterval(changeHeroContent, 5000);

 // Set Initial Image
 heroBg.style.backgroundImage = `url('${heroImages[0]}')`;






 document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-top, .reveal-bottom");

    const revealOnScroll = () => {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load in case elements are already in view
});



const slider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index === 0) ? testimonials.length - 1 : index - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    index = (index === testimonials.length - 1) ? 0 : index + 1;
    updateSlider();
});

// Auto-slide every 4 seconds
setInterval(() => {
    index = (index === testimonials.length - 1) ? 0 : index + 1;
    updateSlider();
}, 4000);
