<script setup>
import { defineProps, ref } from "vue";
import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { email as EmailVerification, min, required } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import { useRouter } from "vue-router";

import AccountPlusIcon from "vue-material-design-icons/AccountPlus.vue";
import AlertCircleIcon from "vue-material-design-icons/AlertCircle.vue";
import CheckCircleIcon from "vue-material-design-icons/CheckCircle.vue";

import ModalContainer from "./uiComponents/modalContainer.vue";
import { register } from "../api/authServices";
import "../utils/validators";
import ServerMessage from "./serverMessage.vue";

// ESTADOS Y HOOKS

const router = useRouter();

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
]);

const serverMessage = ref(null);
const isLoading = ref(false);
const form = ref({
  email: "",
  password: "",
  passwordConfirm: "",
});

//FUNCIONES

const handleDisableButton = () => {
  return (
    form.email === "" ||
    form.password === "" ||
    form.password !== form.passwordConfirm
  );
};

const handleSubmit = async () => {
  isLoading.value = true;
  serverMessage.value = null;

  const data = {
    email: form.email,
    password: form.password,
  };

  const response = await register(data);

  if (response.ok) {
    serverMessage.value = {
      type: "success",
      message: "Usuario registrado correctamente",
    };
    setTimeout(() => {
      serverMessage.value = null;
      router.push("/inicio");
    }, 2000);
  } else {
    serverMessage.value = {
      type: "error",
      message:
        "Solo usuarios definidos pueden acceder (usar email: eve.holt@reqres.in contraseña: 'pistol')",
    };
  }

  isLoading.value = false;
};
</script>

<template>
  <ModalContainer :isModalVisible="isModalVisible" :closeModal="closeModal">
    <Form @submit="handleSubmit" class="form-container">
      <div class="header-container">
        <AccountPlusIcon :size="30" fillColor="var(--accent-color)" />
        <h2>Registro</h2>
      </div>
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
      <div class="field-container">
        <Field
          v-model="form.password"
          type="password"
          id="password"
          name="password"
          rules="required|min:6"
          placeholder="Contraseña"
        />
        <ErrorMessage name="password" class="error-message" />
      </div>
      <div v-if="form.password" class="field-container">
        <Field
          v-model="form.passwordConfirm"
          type="password"
          id="password-confirm"
          name="password-confirm"
          :rules="{ required: true, passwordConfirm: form.password }"
          placeholder="Repetir contraseña"
        />
        <ErrorMessage name="password-confirm" class="error-message" />
      </div>
      <button
        class="button_1"
        type="submit"
        :disabled="handleDisableButton()"
        :class="{ button_disabled: handleDisableButton() }"
      >
        {{ isLoading ? "Cargando..." : "Registrar" }}
      </button>
      <ServerMessage :serverMessage="serverMessage" />
    </Form>
  </ModalContainer>
</template>

<style scoped>
.header-container {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
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
