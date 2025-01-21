<script setup>
import { defineProps, defineEmits } from "vue";
import ModalContainer from "../../components/modalContainer.vue";

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
]);

const emit = defineEmits(["closeModal"]);
</script>

<template>
  <ModalContainer :isModalVisible="isModalVisible" :closeModal="closeModal">
    <div style="gap: 10px">
      <h2>Log in</h2>
      <div style="gap: 10px">
        <input type="email" id="email" name="email" required />
        <input type="password" id="password" name="password" required />
        <button class="button_1" type="submit">Log in</button>
      </div>
    </div>
  </ModalContainer>
</template>
