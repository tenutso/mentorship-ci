import { defineStore } from "pinia";
import { useDrizzle, tables, eq } from "~~/server/utils/drizzle";
export const useSettingsStore = defineStore("settings", () => {
  const settings = ref<any>({});
  const loading = ref(true);
  const siteFont = ref<any>({});

  async function fetchSettings() {
    const { data, status, error, pending, clear } = await useFetch(
      "/api/settings"
    );

    settings.value = data.value?.settings || {};
    loading.value = pending.value;
    siteFont.value = data.value?.siteFont || "";

    //console.log("STORE: ", data.value);
  }

  return { fetchSettings, settings, loading, siteFont };
});
