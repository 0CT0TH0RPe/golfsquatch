<!-- Footer.vue -->
<template>
    <footer>
        <p>&copy; {{ currentYear }} golfsquatch - www.golfsquatch.com | | tony@golfsquatch.com - 425-327-1296</p>
    </footer>
</template>
  
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },

    methods: {
        goToAboutPage() {
            this.$router.push('/about');
        },
    },
};
</script>
  
<style scoped>
footer {
    background: #ffffff;
    color: #2c5242;
    padding: 0.01rem;
    font-weight: bold;
}

footer p {
    margin: 0;
}

footer p.copyright {
    opacity: 0.75;
    font-size: 0.85rem;
}

footer p.copyright:hover {
    opacity: 1;
    cursor: pointer;
}
</style>