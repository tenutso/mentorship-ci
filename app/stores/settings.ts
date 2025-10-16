import { defineStore } from "pinia";
import prisma from "~~/lib/prisma";
import type { settings } from "@prisma/client";
export const useSettingsStore = defineStore("settings", () => {
  const settings = ref<Partial<settings>>({});
  const loading = ref(true);

  async function fetchSettings() {
    const { data, status, error, pending, clear } = await useFetch(
      "/api/settings"
    );

    settings.value = data.value.settings || {};
    loading.value = pending.value;
    const font = await prisma.fonts.findUnique({
      where: {
        id: 1,
      },
    });
    settings.value.site_font = font.name;
  }
  return { fetchSettings, settings, loading };
});
