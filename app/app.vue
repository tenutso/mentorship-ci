<script setup lang="ts">
const settings = useSettingsStore();
await callOnce(() => settings.fetchSettings());
</script>
<template>
  <UApp>
    <NuxtLayout />
  </UApp>
</template>
