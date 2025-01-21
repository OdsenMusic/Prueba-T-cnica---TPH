<script setup>
import { defineProps, defineEmits } from "vue";

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
]);
</script>

<template>
  <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
