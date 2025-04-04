// product...shop

function increaseQuantity(button) {
    let quantitySpan = button.nextElementSibling;
    let currentQuantity = parseInt(quantitySpan.innerText);
    quantitySpan.innerText = currentQuantity + 1;
}


// Trending Sunglasses Section

let currentIndex = 0;
const images = document.querySelectorAll('.image-slider1 .slide-image');

function changeImage() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].classList.add('active'); // Show the next image
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

document.addEventListener("DOMContentLoaded", function () {
    // Image Slider Functionality
    const slider = document.querySelector(".image-slider .slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const scrollStep = 200; // Adjust based on image width

    if (slider && prevBtn && nextBtn) {
        nextBtn.addEventListener("click", function () {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", function () {
            slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
        });
    }

    // Read More Toggle for Blog Posts
    document.querySelectorAll(".read-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.previousElementSibling;
            if (content) {
                content.classList.toggle("expanded");
                this.textContent = content.classList.contains("expanded") ? "Read Less" : "Read More";
            }
        });
    });

    // Blog Image Gallery Navigation
    const gallerySlider = document.querySelector(".gallery-slider");
    const gallerySlides = document.querySelectorAll(".gallery-slide");
    const prevButton = document.querySelector(".gallery-prev");
    const nextButton = document.querySelector(".gallery-next");

    let currentIndex = 0;

    if (gallerySlider && gallerySlides.length > 0 && prevButton && nextButton) {
        const updateGalleryPosition = () => {
            const slideWidth = gallerySlides[0].offsetWidth + 20; // Include gap between slides
            gallerySlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateGalleryPosition();
            }
        });

        nextButton.addEventListener("click", () => {
            if (currentIndex < gallerySlides.length - 1) {
                currentIndex++;
                updateGalleryPosition();
            }
        });

        // Adjust position on window resize
        window.addEventListener("resize", updateGalleryPosition);
    }
});