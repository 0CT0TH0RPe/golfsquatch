<!-- TopSection.vue -->
<template>
    <div class="top-section">
        <div class="topsection-text">
            <p class="text-green">
                Golfsquatch is a golfing lifestyle brand. Whether it's hosting tournaments, education & coaching golfers or
                building golf apps. Or simply just travelling to play golf. <br /> Join our community of avid golfers
                ranging from
                beginners to experienced players; who place bets on skins games at their private country clubs. As well as
                everyone in between. <br />
                Whether it's teeing off at sunrise, perfecting your swing, or chasing that hole-in-one dream.

                We live and breathe golf ~ our religion, your Gateway to the World of Golf. <br />
                <br />
                <span class="text-color">Sign Up For The Latest & Greatest in The World of Golf</span>
            </p>
        </div>

        <img src="" class="topsection-banner.jpg">

    </div>
</template>
 
<style scoped>
.top-section {
    background-color: #2c5242;
    /* A green color reminiscent of golf courses */
    padding: 1rem 0;
    /* Reduced padding to 1rem top and bottom */
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    color: white;
    /* Text color changed to white for better visibility */
    font-family: 'Arial', sans-serif;
    /* A common sans-serif font */
}

.topsection-text {
    text-align: center;
    margin: 0;
}

.golf-text {
    font-size: 1rem;
    /* Adjust the font size to your preference */
    line-height: 1.6;
    /* Improved line spacing for comfortable reading */
    margin: 0;
    padding: 0 20px;
    /* Added some padding for better text spacing */
}

.text-color {
    color: #FF6200;
    font-weight: 1000;
}

@media (min-width: 768px) {
    .topsection-text {
        display: block;
        /* Reset display to block */
        text-align: center;
    }

    .golf-text {
        font-size: 1.5rem;
    }
}

.topsection-banner {
    position: center;
    left: 0;
    right: 0;

    width: 100%;

    opacity: 0.5;
    object-fit: cover;
}

.button:hover {
    background-color: #1f3c2c;
}
</style>
