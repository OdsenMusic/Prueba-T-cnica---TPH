<script setup>
import { defineProps } from "vue";
defineProps({
  styles: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="floating-container-flat" :style="styles">
    <slot></slot>
  </div>
</template>

<style>
.floating-container-flat {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 30px 30px 0 0;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}
</style>
