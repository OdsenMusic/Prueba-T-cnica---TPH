<script setup>
import { defineProps, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { email as EmailVerification, required } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

import { login } from "../api/authServices";
import ModalContainer from "./uiComponents/modalContainer.vue";
import AccountIcon from "vue-material-design-icons/Account.vue";

import "../utils/validators";
import ServerMessage from "./serverMessage.vue";

const router = useRouter();

const isLoading = ref(false);
const serverMessage = ref(null);
const form = reactive({
  email: "",
  password: "",
});

configure({
  validateOnInput: true,
  bails: false,
  generateMessage: localize({
    en: {
      messages: {
        required: "Este campo es obligatorio",
        email: "Por favor, introduce un email válido",
      },
    },
  }),
});

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
  "openRegisterModal",
]);

// FUNCIONES PARA EL FORMULARIO

const handleDisableButton = () => {
  return form.email === "" || form.password === "";
};

const handleSubmit = async () => {
  serverMessage.value = null;
  isLoading.value = true;

  try {
    const response = await login({
      email: form.email,
      password: form.password,
    });
    if (response.ok) {
      isLoading.value = false;
      serverMessage.value = {
        message: "Inicio de sesión correcto",
        type: "success",
      };
      setTimeout(() => {
        form.email = "";
        form.password = "";
        router.push("/inicio");
      }, 1000);
    } else {
      console.error("Login failed:", response.status, response.data);
      isLoading.value = false;
      serverMessage.value = {
        message:
          "Email o contraseña incorrectos. Usar (usar email: eve.holt@reqres.in contraseña: cityslicka)",
        type: "error",
      };
    }
  } catch (error) {
    serverMessage.value = {
      message: "Lo sentimos, estamos teniendo problemas.",
      type: "error",
    };
    console.error(error);
  }
};
</script>

<template>
  <ModalContainer :isModalVisible="isModalVisible" :closeModal="closeModal">
    <div class="header-container">
      <AccountIcon :size="30" fillColor="var(--accent-color)" />
      <h2>Log in</h2>
    </div>
    <Form @submit="handleSubmit" class="form-container">
      <div class="field-container">
        <Field
          v-model="form.email"
          rules="required|email"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <ErrorMessage name="email" class="error-message" />
      </div>
      <div class="field-container" v-show="form.email !== ''">
        <Field
          v-model="form.password"
          type="password"
          id="password"
          name="password"
          rules="required"
          placeholder="Contraseña"
        />
        <ErrorMessage name="password" class="error-message" />
      </div>
      <button
        class="button_1"
        type="submit"
        :disabled="handleDisableButton()"
        :class="{ button_disabled: handleDisableButton() }"
      >
        {{ isLoading ? "Cargando..." : "Iniciar sesión" }}
      </button>
      <ServerMessage :serverMessage="serverMessage" />
    </Form>
    <button class="create-account-button" @click="openRegisterModal">
      Crear cuenta
    </button>
  </ModalContainer>
</template>

<style scoped>
.header-container {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.create-account-button {
  font-size: 0.8rem;
  font-weight: 300;
  margin-top: 10px;
}

.error-message {
  max-width: 70%;
  font-size: 0.8rem;
  background-color: rgb(147, 0, 0);
  padding: 5px 10px;
  color: white;
  border-radius: 0 0 10px 10px;
}

.field-container {
  position: relative;
  gap: 0px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
