<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { login } from "../../api/authServices";
import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { required, email as EmailVerification, min } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import ModalContainer from "../../components/modalContainer.vue";
import { reactive } from "vue";
import AccountIcon from "vue-material-design-icons/Account.vue";

const loginSuccess = ref(false);
const isLoading = ref(false);
const serverError = ref(null);
const form = reactive({
  email: "eve.holt@reqres.in",
  password: "cityslicka",
});

//CONFIGURACIÓN DE VEE-VALIDATE

defineRule("required", required);

defineRule("min", min);

defineRule("email", EmailVerification);

configure({
  validateOnInput: true,
  bails: false,
  generateMessage: localize({
    en: {
      messages: {
        required: "Este campo es obligatorio",
        email: "Por favor, introduce un email válido",
        password: "La contraseña debe tener al menos 8 caracteres",
        min: "La contraseña debe tener al menos 8 caracteres",
      },
    },
  }),
});

const { isModalVisible, closeModal } = defineProps([
  "isModalVisible",
  "closeModal",
]);

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
const handleDisableButton = () => {
  return !form.email === "" || !form.password === "";
};
const handleSubmit = async () => {
  console.log("helo", form);

  isLoading.value = true;

  try {
    const response = await login({
      email: form.email,
      password: form.password,
    });
    if (response.ok) {
      console.log("Login successful");
      isLoading.value = false;
      loginSuccess.value = true;
      setTimeout(() => {
        emit("closeModal");
      }, 2000);
    } else {
      console.error("Login failed:", response.status, response.data);
      isLoading.value = false;
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <ModalContainer :isModalVisible="isModalVisible" :closeModal="closeModal">
    <div v-if="!loginSuccess" style="gap: 10px">
      <div
        style="
          flex-direction: row;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        "
      >
        <AccountIcon size="30px" fillColor="var(--accent-color)" />
        <h2>Log in</h2>
      </div>
      <div v-if="serverError" style="color: red">{{ serverError }}</div>
      <div style="gap: 10px">
        <Form class="form-container">
          <div class="field-container">
            <Field
              @change="handleEmailChange"
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
              @change="handlePasswordChange"
              v-model="form.password"
              type="password"
              id="password"
              name="password"
              rules="required|min:8"
              placeholder="Contraseña"
            />
            <ErrorMessage name="password" class="error-message" />
          </div>
          <button
            :disabled="form.email && form.password"
            class="button_1"
            :class="{ button_disabled: handleDisableButton() }"
            @click="handleSubmit"
          >
            {{ isLoading ? "Cargando..." : "Iniciar sesión" }}
          </button>
        </Form>
      </div>
    </div>
    <div v-else>
      <h2>Log in successful</h2>
    </div>
  </ModalContainer>
</template>

<style>
.error-message {
  max-width: 75%;
  font-size: 0.8rem;
  background-color: rgb(147, 0, 0);
  padding: 5px 10px;
  color: white;
  border-radius: 0 0 10px 10px;
}

.field-container {
  position: relative;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
