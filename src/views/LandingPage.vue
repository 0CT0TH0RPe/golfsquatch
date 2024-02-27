<!-- LandingPage.vue -->
<template>
    <div>
        <!-- Include Header.vue component -->
        <Header />

        <!-- Include Navbar.vue component -->
        <Navbar />

        <!-- Include TopSection.vue component -->
        <TopSection />

        <!-- Include MiddleSection.vue component -->
        <MiddleSection />

        <!-- Include BottomSection.vue component -->
        <BottomSection />

        <!-- Include Footer.vue component -->
        <Footer />
    </div>
</template>

<script>
// Import the necessary components
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import TopSection from '@/components/TopSection.vue'
import MiddleSection from '@/components/MiddleSection.vue'
import BottomSection from '@/components/BottomSection.vue'

export default {
    name: 'LandingPage',
    components: {
        // Register the imported components
        Header,
        Footer,
        Navbar,
        TopSection,
        MiddleSection,
        BottomSection,
    },
};
</script>

<style scoped>
.bg-green-500 {
    background-color: #2c5242;
}

.text-white {
    color: #ffffff;
}

.text-4xl {
    font-size: 2.25rem;
}

.text-2xl {
    font-size: 1.00rem;
}
</style>
