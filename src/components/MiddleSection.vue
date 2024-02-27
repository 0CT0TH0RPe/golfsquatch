<!-- MiddleSection.vue -->
<template>
    <div class="carousel-container">
        <div class="carousel">
            <!-- Image carousel code -->
            <div class="slide">
                <img :src="slides[currentSlide].imageUrl" :alt="slides[currentSlide].caption">
            </div>
            <button class="prev" @click="prevSlide">&#10094;</button>
            <button class="next" @click="nextSlide">&#10095;</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentSlide: 0,
            slides: [
                {
                    imageUrl: '/public/Carousel-Golf-Greeb-Image-3.jpg',
                    caption: 'Golf Lifestyle',
                },
                {
                    imageUrl: '/public/Carousel-Golf-Ball-Image-1.jpg',
                    caption: 'Enjoy Golf',
                },
                {
                    imageUrl: '/public/Carousel-Golf-Irons-Image-2.jpg',
                    caption: 'Perfect Your Swing',
                },
            ],
        };
    },

    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },

        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
    },
};
</script>
  
<style scoped>
.carousel-container {
    margin-top: 10px;
    /* Adjust this value to control the spacing */
    /* Other styles for the container if needed */
}

.carousel {
    position: relative;
    max-width: 1280px;
    /* Increase the max-width as needed */
    margin: 0 auto;
}

.slide {
    text-align: center;
    background-color: #ffffff;
    /* White background for slides */
    padding: 2px;
    /* Padding around slides for spacing */
}

.slide img {
    width: 100%;
    /* Stretch the image to the full width of its container */
    height: auto;
    /* Maintain the image's aspect ratio by adjusting the height automatically */
    max-height: 100%;
    object-fit: cover;
    /* This ensures the image covers the entire container */
    border-radius: 2px;
    /* Slight border-radius for images */
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    /* Adjust font size */
    padding: 0.5rem 1rem;
    /* Adjust padding */
    border-radius: 4px;
    /* Rectangular buttons */
    background-color: white;
    /* Change to white background color */
    color: #2c5242;
    /* Black button text color */
    cursor: pointer;
    border: none;
    outline: none;
}

.prev {
    left: 20px;
    /* Adjust button positioning */
}

.next {
    right: 20px;
    /* Adjust button positioning */
}
</style>
  
