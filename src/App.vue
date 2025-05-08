<script setup lang="ts">
import { viewLoader } from "@/utils/loaderHelper";
import { loadTheme } from "@/utils/themeLoader";
import { ref, onMounted } from "vue";

const SubscriptionView = viewLoader("Subscription.view");

const tenant = ref(import.meta.env.VITE_TENANT || "caravelo");
const theme = ref(import.meta.env.VITE_THEME || "light");
console.log("TENANT:", import.meta.env.VITE_TENANT);
console.log("THEME:", import.meta.env.VITE_THEME);

onMounted(async () => {
  await loadTheme();
});
</script>

<template>
  <div :class="`theme--${theme.value}`">
    <pre>App built for tenant: {{ tenant }}</pre>
    <SubscriptionView />
  </div>
</template>
