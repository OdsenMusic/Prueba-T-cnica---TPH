<script setup>
import { ref } from "vue";
</script>

<template>
  <nav class="navigation-bar">
    <img class="logo" src="../../assets/logo.png" alt="logo" />
    <div class="navigation-bar-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
  font-size: 1.4em;
  transition: 300ms;
  font-weight: 200;
  padding: 10px;
}

a:hover {
  color: var(--accent-color);
  font-weight: 600;
}

.logo {
  height: 80%;
}

.navigation-bar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  height: 100px;
  width: calc(100% - 40px);
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}

.navigation-bar-links {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
