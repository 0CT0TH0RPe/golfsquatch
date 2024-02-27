<!-- Sidebar.vue -->
<template>
    <aside :class="{ open: isOpen }">
        <ul>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
            <!-- Add more sidebar items as needed -->
        </ul>
    </aside>
</template>
  
<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    },

    computed: {
        sidebarClass() {
            return {
                open: this.isOpen
            }
        }
    }
}
</script>
  
<style scoped>
aside {
    background: #333;
    color: #fff;
    width: 200px;
    padding: 1rem;
}

aside.open {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    margin: 0.5rem 0;
}

a {
    color: #fff;
    text-decoration: none;
}

@media (min-width: 768px) {
    aside {
        position: relative;
        width: 200px;
    }

    aside.open {
        width: 200px;
    }
}
</style>
  