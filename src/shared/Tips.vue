<!-- Tips.vue -->
<template>
    <!-- Your template content for Tips.vue goes here -->
    <div class="tips">
        <h1>Tips for Golfers</h1>
        <!-- Add golf tips content here -->
        <div class="tip">
            <h2>Tip #1: Proper Grip</h2>
            <p>
                To improve your swing, make sure to have a proper grip on the club. Your hands should be close together,
                and the club should rest in your fingers, not your palms. Maintain a firm but relaxed grip for better
                control.
            </p>
        </div>
        <div class="tip">
            <h2>Tip #2: Stance and Alignment</h2>
            <p>
                Your stance and alignment play a crucial role in your shot accuracy. Ensure your feet, hips, and shoulders
                are parallel to the target line. A consistent stance will help you make more accurate shots.
            </p>
        </div>
        <!-- Add more golf tips as needed -->
    </div>
</template>
  
<script>
export default {
    // Your component logic for Tips.vue goes here
};
</script>
  
<style scoped>
/* Add your component-specific styles for Tips.vue here */

.tips {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.tip {
    margin-bottom: 20px;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

p {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
}
</style>
  