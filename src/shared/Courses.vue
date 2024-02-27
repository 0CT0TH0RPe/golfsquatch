<!-- Courses.vue -->
<template>
    <!-- Your template content for Courses.vue goes here -->
    <div class="courses">
        <h1>Golf Courses</h1>
        <!-- Add golf course listings here -->
        <div class="course">
            <img src="/images/course1.jpg" alt="Golf Course 1">
            <h2>Course Name 1</h2>
            <p>Location: City 1, State 1</p>
            <p>Par: 72</p>
            <p>Length: 6,500 yards</p>
        </div>
        <div class="course">
            <img src="/images/course2.jpg" alt="Golf Course 2">
            <h2>Course Name 2</h2>
            <p>Location: City 2, State 2</p>
            <p>Par: 71</p>
            <p>Length: 6,300 yards</p>
        </div>
        <!-- Add more golf course listings as needed -->
    </div>
</template>
  
<script>
export default {
    // Your component logic for Courses.vue goes here
};
</script>
  
<style scoped>
/* Add your component-specific styles for Courses.vue here */

.courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.course {
    flex: 0 1 calc(33.33% - 20px);
    /* Three courses per row with spacing */
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
}

.course img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.5rem;
    margin: 10px 0;
}

p {
    font-size: 1rem;
    margin: 5px 0;
    color: #333;
}
</style>
  