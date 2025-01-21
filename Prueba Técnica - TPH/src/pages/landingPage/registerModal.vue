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
      <h2>Registro</h2>
      <div style="gap: 10px">
        <input type="name" id="name" name="name" required />
        <input type="email" id="email" name="email" required />
        <input type="phone" id="phone" name="phone" required />
        <input type="password" id="password" name="password" required />
        <button class="button_1" type="submit">Registrarse</button>
      </div>
    </div>
  </ModalContainer>
</template>

<
