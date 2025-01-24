<script setup>
import { onMounted, ref } from "vue";
import PageContainer from "../../components/uiComponents/pageContainer.vue";
import { clearStorage, getStorageItem } from "../../utils/localStorage";
import CheckCircleIcon from "vue-material-design-icons/CheckCircle.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const logged = ref(false);

const handleLogout = () => {
  clearStorage();
  logged.value = false;
  setTimeout(() => {
    router.push({ path: "/", query: { login: "true" } });
  }, 0);
};

onMounted(() => {
  const token = getStorageItem("token");
  if (token) {
    logged.value = true;
  } else {
    setTimeout(() => {
      router.push({ path: "/", query: { login: "true" } });
    }, 0);
  }
});
</script>

<template>
  <PageContainer>
    <h1 v-if="!logged" style="color: red">
      Por favor para continuar haz login
    </h1>
    <div style="gap: 30px" v-else>
      <CheckCircleIcon size="100" color="green" />
      <h1>Login realizado con éxito</h1>
      <button @click="handleLogout" style="color: white">Cerrar sesión</button>
    </div>
  </PageContainer>
</template>
