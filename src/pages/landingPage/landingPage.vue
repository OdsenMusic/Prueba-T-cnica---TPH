<script setup>
import NavigationBar from "../../components/navigationBar.vue";
import PageContainer from "../../components/uiComponents/pageContainer.vue";
import Footer from "../../components/footer.vue";
import Logo from "../../assets/logo_text.png";
import LoginModal from "../../components/loginModal.vue";
import RegisterModal from "../../components/registerModal.vue";
import SlideShow from "../../components/slideShow.vue";
import { onMounted, ref } from "vue";
import RightContainer from "./components/rightContainer.vue";
import LeftContainer from "./components/leftContainer.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLoginModalVisible = ref(false);

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

onMounted(() => {
  const params = route.query;
  if (params.login === "true") {
    openLoginModal();
  }
});
</script>

<template>
  <NavigationBar
    :openLoginModal="openLoginModal"
    :openRegisterModal="openRegisterModal"
  />

  <div class="page-wrapper">
    <!-- HERO SECTION -->
    <PageContainer id="inicio" style="justify-content: flex-end">
      <div class="hero-layout">
        <div style="" class="hero-left-layout">
          <img class="main-logo" :src="Logo" alt="Logo de Construct.ICO" />
          <LeftContainer />
        </div>
        <div class="hero-right-layout">
          <RightContainer :openRegisterModal="openRegisterModal" />
        </div>
      </div>
      <div class="background-img"></div>
    </PageContainer>
    <!-- TRANSITION SECTION -->
    <div id="info" class="transition-container"></div>
    <!-- SLIDESHOW SECTION -->
    <PageContainer id="trabajos">
      <SlideShow />
    </PageContainer>
    <Footer />
  </div>

  <LoginModal
    :openRegisterModal="
      () => {
        openRegisterModal();
        closeLoginModal();
      }
    "
    :isModalVisible="isLoginModalVisible"
    :closeModal="closeLoginModal"
  />
  <RegisterModal
    :isModalVisible="isRegisterModalVisible"
    :closeModal="closeRegisterModal"
  />
</template>

<style>
.page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  justify-content: flex-end;
}

.transition-container > h1 {
  width: calc(100% - 60px);
  text-align: center;
}

.hero-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 100px);
}

.hero-left-layout {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.hero-right-layout {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.transition-container {
  height: 100px;
  width: 100%;
  background-color: var(--accent-color);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
}

.background-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.main-logo {
  width: 700px;
  height: 300px;
  object-fit: cover;
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  .main-logo {
    width: 100%;
    margin-top: 150px;
    scale: 1.4;
    margin-bottom: calc(100vh - 400px);
  }
  .hero-layout {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .hero-left-layout {
    width: calc(100% - 100px);
  }

  .hero-right-layout {
    width: calc(100% - 100px);
  }
}
</style>
