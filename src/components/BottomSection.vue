<!-- BottomSection.vue -->
<template>
    <div class="bottom-section">
        <p>Member: Book Golfsquatch Tour</p>
        <!-- Apply the "button" class to the "Book Now" button -->
        <button class="button" @click="bookNow">Book Now</button>
    </div>
</template>
  
<script>
export default {
    name: 'BottomSection',

    data() {
        return {
            // Component data
            bookings: []
        }
    },

    methods: {
        bookNow() {
            // Handle booking logic
            const booking = {
                name: 'John Doe',
                date: '2023-03-01',
                guests: 2
            }

            this.bookings.push(booking)
        }
    }
}
</script>
  
<style scoped>
.bottom-section {
    background-color: #2c5242;
    /* Set the background color to the desired HEX value */
    color: #ffffff;
    padding: 10px 20px;
    /* Padding for left and right */
    padding-top: 1px;
    /* Adjust the top padding as needed */
    border-radius: 2px;
    font-weight: bold;
}

p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 10px;
}

/* Apply the "button" class to the "Book Now" button */
button.button {
    background-color: #2c5242;
    /* Off-hover color */
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    /* Add a pointer cursor on hover */
    transition: background-color 0.3s;
    /* Add a smooth transition effect */

}

/* Add hover effect for the "Book Now" button */
button.button:hover {
    background-color: #FF6200;
    /* Hover color */
}
</style>