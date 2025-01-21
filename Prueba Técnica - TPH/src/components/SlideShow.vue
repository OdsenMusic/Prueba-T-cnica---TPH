<template>
  <div
    class="slideshow"
    @mouseenter="stopSlideshow"
    @mouseleave="startSlideshow"
  >
    <div class="slideshow-wrapper-left" ref="wrapper">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide Image" />
      </div>
    </div>
    <div class="slideshow-wrapper-right" ref="wrapper">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Image1 from "../assets/background_1.jpg";

const images = [Image1, Image1, Image1, Image1, Image1, Image1];
const wrapper = ref(null);
let intervalId = null;

const startSlideshow = () => {
  let offset = 0;

  intervalId = setInterval(() => {
    offset -= 1;
    if (Math.abs(offset) >= wrapper.value.scrollWidth / 2) {
      offset = 0;
    }
    wrapper.value.style.transform = `translateX(${offset}px)`;
  }, 10);
};

const stopSlideshow = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  stopSlideshow();
});
</script>

<style scoped>
.slideshow {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}

.slideshow-wrapper-left {
  display: flex;
  flex-direction: row;
  width: max-content;
  animation: slide 100s linear infinite;
}

.slideshow-wrapper-right {
  display: flex;
  flex-direction: row;
  width: max-content;
  animation: slide-right 100s linear infinite;
}

.slide {
  flex: 0 0 auto;
  width: 600px;
  height: 50vh;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
