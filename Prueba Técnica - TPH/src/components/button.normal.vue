<script setup>
</script>

<template>
  <div>
    <button class="button" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.button {
  padding: 1em 2em;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 300ms;
}

