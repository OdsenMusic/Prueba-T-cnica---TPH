<script setup>
import { nextTick, onMounted } from "vue";
import materialsImg from "../../../assets/materials_img.png";
import { animate } from "motion";

onMounted(async () => {
  await nextTick();
  animate(
    "#hero-left-container",
    { opacity: [0, 1], translateY: [200, 0] },
    { duration: 0.8 }
  );
});
</script>

<template>
  <div id="hero-left-container" class="floating-container main-container">
    <img class="materials-img" :src="materialsImg" alt="" />
    <div style="width: 75%; gap: 10px">
      <h3 class="material-title">Los mejores materiales</h3>
      <div class="horizontal-line"></div>
      <p class="material-description">
        Trabajamos con los mejores distribuidores
      </p>
    </div>
  </div>
</template>

<style>
.main-container {
  bottom: 0;
  left: 40px;
  width: 400px;
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 30px 30px 0 0;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

.material-title {
  color: black;
  font-size: 1.9rem;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 5px;
  text-align: center;
}

.materials-img {
  width: calc(30%);
  filter: saturate(0.4) drop-shadow(0 0 30px rgba(0, 0, 0, 0.5));
  transition: 0.5s;
}

.materials-img:hover {
  filter: saturate(1) hue-rotate(0deg);
}

.material-description {
  color: black;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 2px;
  max-width: 80%;
  line-height: 1.2;
  text-align: center;
}

@media screen and (max-width: 900px) {
  .main-container {
    border-radius: 30px;
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
