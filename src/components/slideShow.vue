<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Image1 from "../assets/slideshow/slideshow_img1.webp";
import Image2 from "../assets/slideshow/slideshow_img2.webp";
import Image3 from "../assets/slideshow/slideshow_img3.webp";
import Image4 from "../assets/slideshow/slideshow_img4.webp";
import Image5 from "../assets/slideshow/slideshow_img5.webp";
import Image6 from "../assets/slideshow/slideshow_img6.webp";
import Image7 from "../assets/slideshow/slideshow_img7.webp";
import Image8 from "../assets/slideshow/slideshow_img8.webp";

const imageSet1 = [Image1, Image2, Image3, Image4];
const imageSet2 = [Image5, Image6, Image7, Image8];
const topWrapper = ref(null);
const bottomWrapper = ref(null);
const imagePositionsTop = ref([]);
const imagePositionsBottom = ref([]);
const intervalTop = ref(null);
const intervalBottom = ref(null);
const wrapperWidth = ref(0);
const imageWidth = 600;
const moveSpeed = 1;
const bottomSpeedOffset = 0.5;

function initPositions() {
  imagePositionsTop.value = imageSet1.map(
    (_, i) => i * imageWidth - imageWidth
  );
  imagePositionsBottom.value = imageSet1.map((_, i) => i * imageWidth);
}

function startSlideshowTop() {
  intervalTop.value = setInterval(() => {
    imagePositionsTop.value = imagePositionsTop.value.map((pos) => {
      let newPos = pos - moveSpeed;
      if (newPos <= -wrapperWidth.value + 200) {
        newPos += imageWidth * imageSet1.length;
      }
      return newPos;
    });
  }, 16);
}

function startSlideshowBottom() {
  intervalBottom.value = setInterval(() => {
    imagePositionsBottom.value = imagePositionsBottom.value.map((pos) => {
      let newPos = pos + moveSpeed - bottomSpeedOffset;
      if (newPos >= wrapperWidth.value - 200) {
        newPos -= imageWidth * imageSet1.length;
      }
      return newPos;
    });
  }, 16);
}

function stopSlideshowLeft() {
  clearInterval(intervalTop.value);
}

function stopSlideshowRight() {
  clearInterval(intervalBottom.value);
}

function stopSlideshows() {
  stopSlideshowLeft();
  stopSlideshowRight();
}

function startSlideshows() {
  startSlideshowTop();
  startSlideshowBottom();
}

onMounted(() => {
  wrapperWidth.value = bottomWrapper.value.offsetWidth;
  initPositions();
  startSlideshows();
});

onUnmounted(() => {
  stopSlideshows();
});
</script>

<template>
  <div class="page-container">
    <h1
      style="
        color: black;
        text-align: center;
        padding-bottom: 40px;
        width: 100%;
        padding-left: 0;
        height: 100px;
      "
    >
      Nuestro mejor trabajo
    </h1>
    <div class="slideshow">
      <div class="floating-container">
        <div class="floating-container-content">
          <h1>Buscando excelencia</h1>
          <div class="horizontal-line"></div>
          <p>Encontrando el futuro</p>
        </div>
      </div>
      <div
        ref="topWrapper"
        @click="stopSlideshows"
        class="slideshow-wrapper-left"
      >
        <div
          v-for="(pos, index) in imagePositionsTop"
          :key="'left-' + index"
          class="slide"
          :style="{ transform: 'translateX(' + pos + 'px)' }"
        >
          <img :src="imageSet1[index]" alt="Slider Image" />
        </div>
      </div>
      <div
        ref="bottomWrapper"
        @click="startSlideshows"
        class="slideshow-wrapper-right"
      >
        <div
          v-for="(pos, index) in imagePositionsBottom"
          :key="'right-' + index"
          class="slide"
          :style="{ transform: 'translateX(' + pos + 'px)' }"
        >
          <img :src="imageSet2[index]" alt="Slide Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;
}
.slideshow {
  overflow: hidden;
  width: 90%;
  height: 70vh;
  position: relative;
  margin: 10px;
  border-radius: 50px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.8);
  background-color: var(--accent-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.slideshow-wrapper-left,
.slideshow-wrapper-right {
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
}
.slide {
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  border: 3px solid white;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.floating-container {
  color: black;
  position: absolute;
  padding: 30px;
  justify-content: flex-start;
  bottom: 0;
  left: 60px;
  width: calc(400px - 60px);
  height: calc(30% - 60px);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 30px 30px 0 0;
  backdrop-filter: blur(10px);
  gap: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  z-index: 30;
}
.horizontal-line {
  width: 50%;
  height: 2px;
  background-color: black;
  margin: 10px 0;
}
@media screen and (max-width: 900px) {
  .floating-container {
    display: none;
  }
}
</style>
