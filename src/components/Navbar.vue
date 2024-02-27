<!-- Navbar.vue -->
<template>
    <nav class="bg-gray-800 py-4">
        <div class="container mx-auto flex justify-between items-center">
            <router-link to="/" class="text-white font-bold text-xl">Home</router-link>
            <router-link to="/about" class="text-white">About</router-link>
            <router-link to="/blog" class="text-white">Blog</router-link>
            <router-link to="/contact" class="text-white">Contact</router-link>
            <!-- Add your navigation links and dropdowns here -->
            <div class="dropdown inline-block relative">
                <router-link to="/clubs" class="text-white">Clubs</router-link>
                <div class="dropdown-content absolute hidden bg-gray-800 text-white">
                    <router-link to="/clubs/drivers" class="block px-4 py-2">Drivers</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Hybrids</router-link>
                    <router-link to="/clubs/irons" class="block px-4 py-2">Irons</router-link>
                    <router-link to="/clubs/wedges" class="block px-4 py-2">Wedges</router-link>
                    <router-link to="/clubs/putters" class="block px-4 py-2">Putters</router-link>
                    <router-link to="/clubs/putters" class="block px-4 py-2">Golf Clubs for Women</router-link>
                    <router-link to="/clubs/putters" class="block px-4 py-2">Golf Clubs for Kids</router-link>
                </div>
            </div>
            <div class="dropdown inline-block relative">
                <router-link to="/equipment" class="text-white">Equipment</router-link>
                <div class="dropdown-content absolute hidden bg-gray-800 text-white">
                    <router-link to="/clubs/golf-bags" class="block px-4 py-2">Golf Bags</router-link>
                    <router-link to="/clubs/golf-push-carts" class="block px-4 py-2">Golf Push Carts</router-link>
                    <router-link to="/clubs/putters" class="block px-4 py-2">Golf Gloves</router-link>
                    <router-link to="/clubs/wedges" class="block px-4 py-2">Golf GPS</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Golf Grips</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Rangefinders</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Swing Analysers</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Golf Umbrellas</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Golf Simulators</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Golf Ball Retrievers</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Golf Balls & Tees</router-link>
                </div>
            </div>
            <div class="dropdown inline-block relative">
                <router-link to="/apparel" class="text-white">Apparel</router-link>
                <div class="dropdown-content absolute hidden bg-gray-800 text-white">
                    <router-link to="/clubs/golf-shoes" class="block px-4 py-2">Golf Shoes</router-link>
                    <router-link to="/clubs/golf-shirts" class="block px-4 py-2">Golf Shirts</router-link>
                    <router-link to="/clubs/putters" class="block px-4 py-2">Golf Pants</router-link>
                    <router-link to="/clubs/wedges" class="block px-4 py-2">Golf Shorts</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Golf Rain Gear</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Womens Golf Apparel</router-link>
                    <router-link to="/clubs/hybrids" class="block px-4 py-2">Kids Golf Apparel</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            // Define your navigation links here
            navLinks: [
                { text: "Home", to: "/" },
                { text: "About", to: "/about" },
                {
                    text: "Clubs",
                    to: "/clubs",
                    sublinks: [
                        { text: "Drivers", to: "/clubs/drivers" },
                        { text: "Hybrids", to: "/clubs/hybrids" },
                        { text: "Irons", to: "/clubs/irons" },
                        { text: "Wedges", to: "/clubs/wedges" },
                        { text: "Putters", to: "/clubs/putters" },
                        { text: "Golf Clubs for Women", to: "/clubs/women" },
                        { text: "Golf Clubs for Kids", to: "/clubs/kids" },
                    ],
                },
                {
                    text: "Equipment",
                    to: "/equipment",
                    sublinks: [
                        { text: "Golf Bags", to: "/equipment/bags" },
                        { text: "Golf Push Carts", to: "/equipment/push-carts" },
                        { text: "Golf Gloves", to: "/equipment/gloves" },
                        { text: "Golf GPS", to: "/equipment/gps" },
                        { text: "Golf Grips", to: "/equipment/grips" },
                        { text: "Rangefinders", to: "/equipment/rangefinders" },
                        { text: "Swing Analysers", to: "/equipment/analysers" },
                        { text: "Golf Umbrellas", to: "/equipment/umbrellas" },
                        { text: "Golf Simulators", to: "/equipment/simulators" },
                        { text: "Golf Ball Retrievers", to: "/equipment/retrievers" },
                        { text: "Golf Balls & Tees", to: "/equipment/balls-tees" },
                    ],
                },
                {
                    text: "Apparel",
                    to: "/apparel",
                    sublinks: [
                        { text: "Golf Shoes", to: "/apparel/shoes" },
                        { text: "Golf Shirts", to: "/apparel/shirts" },
                        { text: "Golf Pants", to: "/apparel/pants" },
                        { text: "Golf Shorts", to: "/apparel/shorts" },
                        { text: "Golf Rain Gear", to: "/apparel/rain-gear" },
                        { text: "Womens Golf Apparel", to: "/apparel/womens" },
                        { text: "Kids Golf Apparel", to: "/apparel/kids" },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.navbar {
    background-color: #2c5242;
    color: white;
    overflow: hidden;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    padding: 10px;
}

.nav-link:hover {
    background-color: #555;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #2c5242;
    min-width: 160px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
}

.dropdown-content a {
    color: #ffffff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: white;
    color: #2c5242;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.spacer-link {
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>