<script setup>
import { defineProps, defineEmits, onMounted, watch } from "vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import { animate } from "motion";

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
]);

const onEnter = () => {
  const animationDuration = 0.3;

  animate(
    ".modal-overlay",
    { opacity: [0, 1] },
    { duration: animationDuration }
  );
  animate(
    ".modal-container",
    { opacity: [0, 1], translateY: [30, 0] },
    { duration: animationDuration }
  );
};

const onLeave = () => {
  const animationDuration = 0.3;

  animate(
    ".modal-overlay",
    { opacity: [1, 0] },
    { duration: animationDuration }
  );
  animate(
    ".modal-container",
    { opacity: [1, 0], translateY: [0, -30] },
    { duration: animationDuration }
  );
};
</script>

<template>
  <Transition :css="false" @enter="onEnter" @leave="onLeave">
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button class="close-button" @click="closeModal">
          <CloseIcon />
        </button>
        <slot></slot>
      </div>
    </div>
  </Transition>
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
  padding: 30px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 100px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
