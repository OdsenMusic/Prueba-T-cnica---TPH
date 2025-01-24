<script setup></script>

<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

@media screen and (max-width: 900px) {
  .page-container {
    height: fit-content;
  }
}
</style>
