<script setup>
import NavigationBar from "../../components/navigationBar/navigationBar.vue";
import PageContainer from "../../components/pageContainer.vue";
import Footer from "../../components/footer/footer.vue";
import BackgroundImage from "../../assets/background_1.jpg";
import LoginModal from "./loginModal.vue";
import RegisterModal from "./registerModal.vue";
import SlideShow from "../../components/slideShow.vue";
import { ref } from "vue";

const isLoginModalVisible = ref(true);

const closeLoginModal = () => {
  isLoginModalVisible.value = false;
};

const openLoginModal = () => {
  isLoginModalVisible.value = true;
};

const isRegisterModalVisible = ref(false);

const closeRegisterModal = () => {
  isRegisterModalVisible.value = false;
};

const openRegisterModal = () => {
  isRegisterModalVisible.value = true;
};
</script>

<template>
  <div class="page-wrapper">
    <PageContainer>
      <NavigationBar />

      <div class="background-img"></div>
      <div style="display: flex; flex-direction: row; align-items: flex-end">
        <h1 style="font-weight: 600">Construct</h1>
        <h2 style="color: blue">.ICO</h2>
      </div>
      <div style="margin-top: 10px; flex-direction: row; gap: 10px">
        <button class="button_1" @click="openLoginModal">Iniciar sesión</button>
        <button class="button_1" @click="openRegisterModal">Registrarse</button>
      </div>
    </PageContainer>
    <PageContainer>
      <h2>¿Qué es Construct.ICO?</h2>

      <SlideShow />
    </PageContainer>
    <Footer />
  </div>
  <LoginModal
    :isModalVisible="isLoginModalVisible"
    :closeModal="closeLoginModal"
  />
  <RegisterModal
    :isModalVisible="isRegisterModalVisible"
    :closeModal="closeRegisterModal"
  />
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.background-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/background_1.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.5;
}

.page-container {
  flex: 1;
}
</style>
