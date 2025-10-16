<script setup lang="ts">
import { ref } from "vue";
import { useHead } from "#app";
import type { NavigationMenuItem } from "@nuxt/ui";

// 🟢 Fetching dynamic data (replace with your endpoints)
const { settings } = useSettingsStore();

useHead({
  title: settings.site_name,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },
    {
      name: "description",
      content:
        "A starter template for Nuxt 3 with Tailwind CSS and DaisyUI integration.",
    },
  ],
  style: [
    {
      innerHTML: `:root { 
        --ui-primary: rgb(${hexToRgb(settings.site_color)});
        --font-sans: '${settings.site_font}', sans-serif;
      }`,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: `https://fonts.googleapis.com/css?family=${settings.site_font}:400,500,600,700`,
    },
    {
      // temporary bootstrap icons
      rel: "stylesheet",
      href: "/assets/front/fonts/bootstrap/bootstrap-icons.css",
    },
  ],
});

// Props or data from API
const menu = ref(true);
const pageTitle = ref("Home");
const user = ref({ role: "" }); // 'admin', 'mentee', 'user', ''

const currentLang = ref({ short: "EN" });

// Navbar toggler
const isNavbarOpen = ref(false);
const openDropdown = ref(null);

function toggleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value;
}

function toggleDropdown(name: any) {
  openDropdown.value = openDropdown.value === name ? null : name;
}

function logout() {
  // Call API or auth composable
  console.log("Logging out...");
}

const items = computed<NavigationMenuItem[]>(() => [
  { label: "Home", to: "/" },
  { label: "Mentors", to: "/mentors" },
  { label: "Blogs", to: "/blogs" },
  { label: "Faqs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
  {
    label: "Pages",
    //type: "label",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/terms", label: "Terms" },
    ],
  },
  {
    label: "Languages",

    //disabled: currentLang == 'EN' ? true:false,
    children: [
      { to: "/en", label: "English" },
      { to: "/fr", label: "French" },
    ],
  },
]);
</script>

<template>
  <UHeader>
    <template #left>
      <!-- Logo -->
      <NuxtLink to="/">
        <img :src="`/${settings.logo}`" width="100" alt="logo" />
      </NuxtLink>
    </template>

    <!-- Menu -->
    <UNavigationMenu :items="items" />

    <!-- Action Buttons -->
    <template #right v-if="user.role === 'admin'">
      <UButton
        color="neutral"
        label="Logout"
        @click="logout"
        icon="i-lucide-log-out"
        aria-label="Logout"
      />
      <UButton
        label="Dasboard"
        to="/admin/dashboard"
        icon="i-lucide-gauge"
        aria-label="Logout"
      />
    </template>
    <template #right v-else-if="user.role === 'mentee'">
      <UButton
        color="neutral"
        label="Logout"
        @click="logout"
        icon="i-lucide-log-out"
        aria-label="Logout"
      />
      <UButton
        label="Dasboard"
        to="/admin/dashboard/mentee"
        icon="i-lucide-gauge"
        aria-label="Logout"
      />
    </template>
    <template #right v-else-if="user.role === 'user'">
      <UButton
        color="neutral"
        label="Logout"
        @click="logout"
        icon="i-lucide-log-out"
        aria-label="Logout"
      />
      <UButton
        label="Dasboard"
        to="/admin/dashboard/user"
        icon="i-lucide-gauge"
        aria-label="Logout"
      />
    </template>
    <template #right v-else>
      <UButton
        color="neutral"
        variant="ghost"
        label="Sign In"
        to="/login"
        aria-label="Sign In"
      />
      <UButton label="Get Started" to="/register" aria-label="Get Started" />
    </template>
  </UHeader>
</template>
