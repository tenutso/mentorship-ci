import { defineStore } from "pinia";
import { useDrizzle, tables, eq } from "~~/server/utils/drizzle";
export const useSettingsStore = defineStore("settings", () => {
  const settings = ref<any>({});
  const loading = ref(true);

  async function fetchSettings() {
    const { data, status, error, pending, clear } = await useFetch(
      "/api/settings"
    );

    settings.value = data.value?.settings || {};
    loading.value = pending.value;
    const font = await useDrizzle()
      .select()
      .from(tables.fonts)
      .where(eq(tables.fonts.id, 1));
    settings.value.site_font = font[0]?.name;
    //console.log("STORE: ", data.value);
  }

  return { fetchSettings, settings, loading };
});
