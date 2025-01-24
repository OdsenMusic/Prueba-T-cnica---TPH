<script setup>
import AlertCircleIcon from "vue-material-design-icons/AlertCircle.vue";
import CheckCircleIcon from "vue-material-design-icons/CheckCircle.vue";
import { defineProps } from "vue";

const props = defineProps({
  serverMessage: {
    type: Object,
    required: false,
    default: null,
  },
});
</script>

<template>
  <div
    :class="{
      success: serverMessage.type === 'success',
      error: serverMessage.type === 'error',
    }"
    class="server-message-container"
    v-if="serverMessage"
  >
    <AlertCircleIcon v-if="serverMessage.type === 'error'" />
    <CheckCircleIcon v-else-if="serverMessage.type === 'success'" />
    <p>{{ serverMessage.message }}</p>
  </div>
</template>

<style>
.success {
  background-color: rgb(0, 147, 0);
}

.error {
  background-color: rgb(147, 0, 0);
}

.server-message-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 5px 10px;
  color: white;
  border-radius: 10px;
  max-width: 200px;
}
</style>
