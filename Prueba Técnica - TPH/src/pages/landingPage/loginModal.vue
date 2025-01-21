<script setup>
import { defineProps, defineEmits } from "vue";
import { login } from "../../api/login.Routes";
import ModalContainer from "../../components/modalContainer.vue";
import { reactive } from "vue";

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
]);

const emit = defineEmits(["closeModal"]);

const form = reactive({
  username: "",
  email: "eve.holt@reqres.in",
  password: "cityslicka",
});

// FUNCIONES PARA EL FORMULARIO

const handleUsernameChange = (event) => {
  form.username = event.target.value;
};
const handleEmailChange = (event) => {
  form.email = event.target.value;
};
const handlePasswordChange = (event) => {
  form.password = event.target.value;
};
const handleSubmit = async () => {
  console.log("helo", form);

  try {
    const response = await login({
      email: form.email,
      password: form.password,
    });
    if (response.ok) {
      emit("closeModal");
    } else {
      console.error("Login failed:", response.status, response.data);
    }
  } catch (error) {
    console.error(error);
  }
};
const handleDisableButton = () => {
  return form.email === "" || form.password === "";
};
</script>

<template>
  <ModalContainer :isModalVisible="isModalVisible" :closeModal="closeModal">
    <div style="gap: 10px">
      <h2>Log in</h2>
      <div style="gap: 10px">
        <input
          @change="handleUsernameChange"
          type="username"
          id="username"
          name="username"
          required
        />
        <input
          @change="handleEmailChange"
          type="email"
          id="email"
          name="email"
          required
        />
        <input
          @change="handlePasswordChange"
          type="password"
          id="password"
          name="password"
          required
        />
        <button class="button_1" @click="handleSubmit">Log in</button>
      </div>
    </div>
  </ModalContainer>
</template>
