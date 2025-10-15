<script setup lang="ts">
const settings = useSettingsStore();
await callOnce(() => settings.fetchSettings());
</script>
<template>
  <div>
    <NuxtLayout />
  </div>
</template>
