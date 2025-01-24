<script setup>
import { nextTick, onMounted, ref } from "vue";
import { animate } from "motion";
import ExampleImage from "../../../assets/slideshow/slideshow_img1.webp";

const props = defineProps({
  openRegisterModal: {
    type: Function,
    required: true,
  },
});

onMounted(async () => {
  await nextTick();
  animate(
    "#hero-right-container",
    { opacity: [0, 1], translateY: [200, 0] },
    { duration: 0.8 }
  );
});

const selectedContent = ref(0);
</script>

<template>
  <div id="hero-right-container" class="floating-container main-container">
    <div class="button-container">
      <button
        :class="{ 'selected-button': selectedContent === 0 }"
        @click="selectedContent = 0"
        class="button_1"
      >
        Nosotros
      </button>
      <button
        :class="{ 'selected-button': selectedContent === 1 }"
        @click="selectedContent = 1"
        class="button_1"
      >
        Partners
      </button>
      <button
        :class="{ 'selected-button': selectedContent === 2 }"
        @click="selectedContent = 2"
        class="button_1"
      >
        Materia
      </button>
    </div>
    <div class="inner-container" v-if="selectedContent === 0">
      <h1 class="section-title">Sobre nosotros</h1>
      <div class="horizontal-line"></div>
      <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        inventore ab, veniam consequuntur corrupti quas itaque non quia ut sunt!
        Architecto dolore, iure eos ipsam tempora non velit, sed excepturi cum
        temporibus optio ea distinctio enim exercitationem quaerat unde
        repellendus numquam. Cupiditate labore est id at, ex voluptates
        assumenda reiciendis.
        <br />
        <br />
        Architecto dolore, iure eos ipsam tempora non velit, sed excepturi cum
        temporibus optio ea distinctio enim exercitationem quaerat unde
        repellendus numquam. Cupiditate labore est id at, ex voluptates
        assumenda reiciendis.
        <br /><br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nisi
        quia vero quod facilis voluptatem itaque at ea minima necessitatibus,
        officiis, ipsam fuga ut porro! Eum voluptatum repellat ipsam voluptas.
      </p>
    </div>
    <div v-if="selectedContent === 1">
      <h1 class="section-title">Compañias con las que trabajamos</h1>
      <div class="horizontal-line"></div>
      <p class="description">
        Insertar logos. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Maiores inventore ab, veniam consequuntur corrupti quas itaque non
        quia ut sunt!
        <br /><br />
        Architecto dolore, iure eos ipsam tempora non velit, sed excepturi cum
        temporibus optio ea distinctio enim exercitationem quaerat unde
        repellendus numquam. Cupiditate labore est id at, ex voluptates
        assumenda reiciendis.
        <br /><br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nisi
        quia vero quod facilis voluptatem itaque at ea minima necessitatibus,
        officiis, ipsam fuga ut porro! Eum voluptatum repellat ipsam voluptas.
      </p>
    </div>
    <div v-if="selectedContent === 2">
      <h1 class="section-title">Materiales</h1>
      <div class="horizontal-line"></div>
      <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        inventore ab, veniam consequuntur corrupti quas itaque non quia ut sunt!
        <br /><br />
        Architecto dolore, iure eos ipsam tempora non velit, sed excepturi cum
        temporibus optio ea distinctio enim exercitationem quaerat unde
        repellendus numquam. Cupiditate labore est id at, ex voluptates
        assumenda reiciendis.
      </p>
      <img class="example-img" :src="ExampleImage" alt="" />
    </div>
    <button
      @click="openRegisterModal"
      style="position: absolute; bottom: 30px; box-shadow: 0 0 30px white"
      class="button_1 work-with-us"
    >
      ¡Trabaja con nosotros!
    </button>
  </div>
</template>

<style scoped>
.example-img {
  margin: 20px;
  width: 100%;
  border-radius: 30px;
}

.inner-container {
  align-items: center;
  justify-content: center;
}

.button_1 {
  overflow: hidden;
  text-overflow: ellipsis;
}

.work-with-us {
  font-size: 1.7rem;
  font-weight: 200;
  animation: heartbeat 1s infinite;
}

.section-title {
  color: var(--text-color-1);
  text-align: center;
}

.description {
  color: var(--text-color-1);
}

.button-container {
  padding: 7px;
  border: 1px solid black;
  border-radius: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.selected-button {
  background-color: transparent;
  color: black;
  border: 1px solid black;
}

.main-container {
  justify-content: flex-start;
  flex-direction: column;
  bottom: 0;
  left: auto;
  right: 60px;
  width: calc(400px - 60px);
  height: calc(80% - 60px);
  gap: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@media screen and (max-width: 900px) {
  .main-container {
    border-radius: 30px;
    width: 100%;
    margin-bottom: 30px;
    height: fit-content;
    padding-bottom: 100px;
    overflow: hidden;
  }
}
</style>
