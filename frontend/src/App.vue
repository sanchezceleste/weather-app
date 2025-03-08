<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App', // optional
  components: {
    RouterLink,
    RouterView
  },
})

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Country List</RouterLink>
        <RouterLink to="/create">Add a Country</RouterLink>
        <RouterLink to="/country">View one Country</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* or any color you prefer */
  z-index: 1000; /* Ensures the header stays on top */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: adds a subtle shadow */
}

nav {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-color: #f8f8f8; /* Optional: different background for nav */
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: #333;
  border-right: 1px solid #ddd;
}

nav a:last-child {
  border-right: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b983; /* or any color you prefer for active links */
}

/* Adjust main content to account for fixed header */
main {
  padding-top: 120px; /* Adjust this value based on your header's height */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .logo {
    margin: 0;
  }

  nav {
    background-color: transparent;
    padding: 0;
  }

  nav a {
    padding: 1rem;
  }
}

</style>
