<!-- Header.vue -->
<template>
    <header class="header">
        <!-- Header content (Flex container for Logo, Text & Search Bar) -->
        <div class="header-content">
            <div class="left-content">
                <div class="logo">
                    <img src="/GolfSquatch.png" alt="GolfSquatchLogo">
                </div>
                <div class="header-text">
                    <h1>GolfSquatch</h1>
                </div>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search...">
                <button class="search-button">Search</button>
            </div>

            <!-- New container for Sign-up and Login buttons with margin -->
            <div class="login-signup-container">
                <!-- Text "Join Our GolfSquatch Membership" -->
                <p class="membership-text">Join GolfSquatch</p>

                <!-- "Sign-up" button (example using router-link) with margin-right -->
                <router-link to="/signup" class="button" style="margin-right: 10px;">Sign-up</router-link>

                <!-- "Login" button (example using router-link) -->
                <router-link to="/login" class="button">Login</router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Add your component-specific styles for Header.vue here */

.header {
    background-color: #031f13;
    /* A deep green color reminiscent of golf courses */
    color: #ffffff;
    /* White text color for contrast */
    padding: 2px 0;
    display: flex;
    justify-content: space-between;
    /* To push the elements to opposite sides */
    align-items: center;
    /* Center content vertically */
    text-align: center;
}

.header-content {
    display: flex;
    align-items: center;
    /* Center content vertically */
    width: 100%;
    /* Occupy the full width of the header */
}

.logo img {
    width: 100px;
    /* Adjust the logo width as needed */
    height: auto;
    /* Maintain aspect ratio */
}

.header-text h1 {
    margin: 0;
    font-size: 2rem;
    /* Adjust font size as needed */
    font-family: 'Georgia', serif;
    /* A serif font for a classic golf feel */
}

.search-bar {
    display: flex;
    align-items: center;
    margin-left: 20px;
    /* Add some margin to move the search bar to the right */
}

.search-bar input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 4px;
}

.search-bar button {
    background-color: #2c5242;
    /* Background color for the search button */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-left: 5px;
    /* Add some space between input and button */
}

/* Add hover effect for the search button */
.search-bar button:hover {
    background-color: #1f3c2c;
}

/* Style for the login-signup container with margin */
.login-signup-container {
    margin-left: auto;
    /* Shift the buttons to the right */
    display: flex;
    /* Ensure both buttons are in a flex container */
    align-items: center;
    /* Center the buttons vertically */
}

/* Add styles for the membership text */
.membership-text {
    margin-right: 10px;
    /* Adjust spacing between text and button */
    font-size: 16px;
    /* Adjust font size as needed */
    color: #FF6200;
    /* Text color */
}

/* Add styles for the buttons (adjust as needed) */
.button {
    background-color: #FF6200;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #1f3c2c;
}
</style>
