<script setup>
import { onMounted, ref } from "vue";
import Logo from "../assets/logo.png";
import { clearStorage, getStorageItem } from "../utils/localStorage";

const { openLoginModal, openRegisterModal } = defineProps([
  "openLoginModal",
  "openRegisterModal",
]);

const logged = ref(false);

onMounted(() => {
  const token = getStorageItem("token");

  if (token) {
    logged.value = true;
  }
});

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const logout = () => {
  clearStorage();
  logged.value = false;
};
</script>

<template>
  <nav class="navigation-bar">
    <img class="logo" :src="Logo" alt="Logo de Construct.ICO" />
    <div class="navigation-bar-links">
      <a
        class="center-links"
        href="#inicio"
        @click.prevent="scrollToSection('inicio')"
        >Inicio</a
      >
      <a
        class="center-links"
        href="#info"
        @click.prevent="scrollToSection('info')"
        >Información</a
      >
      <a
        class="center-links"
        href="#trabajos"
        @click.prevent="scrollToSection('trabajos')"
        >Trabajos</a
      >
    </div>
    <div v-if="!logged" class="navigation-bar-links">
      <button class="account-buttons" @click="openLoginModal">
        Iniciar sesión
      </button>
      <div class="vertical-line"></div>
      <button class="account-buttons" @click="openRegisterModal">
        Registro
      </button>
    </div>
    <div v-else>
      <button class="account-buttons" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
  font-size: 1.4em;
  transition: 300ms;
  font-weight: 200;
  padding: 10px;
  border-radius: 40px;
  text-align: center;
}

a:hover {
  color: white;
  background-color: black;
}

.account-buttons {
  border-radius: 40px;
  padding: 10px;
  transition: 0.3s;
  color: var(--text-color-1);
}

.account-buttons:hover {
  color: white;
  background-color: black;
}

.logo {
  height: 50%;
  margin-left: 15px;
}
.vertical-line {
  height: 30px;
  width: 1px;
  background-color: black;
}

.center-links {
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 7px;
  text-transform: uppercase;
  padding-left: 20px;
}

.navigation-bar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  height: 100px;
  width: calc(100% - 40px);
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.navigation-bar-links {
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: black;
}

@media screen and (max-width: 750px) {
  .center-links {
    display: none;
  }
}
</style>
