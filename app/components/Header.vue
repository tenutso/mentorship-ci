<template>
  <header v-if="menu" id="navbar">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-whites py-3">
        <!-- Logo -->
        <NuxtLink to="/" class="navbar-brand">
          <img :src="settings.logo" width="160" alt="logo" />
        </NuxtLink>

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
        </button>

        <!-- Menu -->
        <div
          :class="[
            'collapse navbar-collapse mt-2 pb-1',
            { show: isNavbarOpen },
          ]"
        >
          <ul class="navbar-nav align-items-lg-center ml-auto">
            <li
              class="nav-item xs-mb-10"
              v-for="link in mainLinks"
              :key="link.text"
            >
              <NuxtLink
                :to="link.href"
                class="nav-link"
                :class="{ active: pageTitle === link.text }"
              >
                {{ link.text }}
              </NuxtLink>
            </li>

            <!-- Pages Dropdown -->
            <li v-if="pages.length" class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                @click.prevent="toggleDropdown('pages')"
              >
                Pages
              </a>
              <ul
                v-if="openDropdown === 'pages'"
                class="dropdown-menu shadow-lg mt-1"
              >
                <li v-for="page in pages" :key="page.slug">
                  <NuxtLink :to="`/page/${page.slug}`" class="dropdown-item">{{
                    page.title
                  }}</NuxtLink>
                </li>
              </ul>
            </li>

            <!-- Language Dropdown -->
            <li v-if="settings.enable_multilingual" class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                @click.prevent="toggleDropdown('lang')"
              >
                {{ currentLang.short }}
              </a>
              <ul
                v-if="openDropdown === 'lang'"
                class="dropdown-menu shadow-lg mt-1"
              >
                <li v-for="lang in languages" :key="lang.slug">
                  <NuxtLink
                    :to="`/home/switch_lang/${lang.slug}`"
                    class="dropdown-item"
                  >
                    {{ lang.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Action Buttons -->
          <ul class="navbar-nav align-items-lg-center ml-lg-auto mt-0 mb-xs-3">
            <li class="nav-item mr-0">
              <template v-if="user.role === 'admin'">
                <button
                  @click="logout"
                  class="btn btn-sm btn-light-secondary ml-auto"
                >
                  <i class="lni lni-exit"></i> Logout
                </button>
                <NuxtLink
                  to="/admin/dashboard"
                  class="btn btn-sm btn-primary ml-auto"
                >
                  <i class="bi bi-speedometer2"></i> Dashboard
                </NuxtLink>
              </template>

              <template v-else-if="user.role === 'mentee'">
                <button
                  @click="logout"
                  class="btn btn-sm btn-light-secondary ml-auto"
                >
                  <i class="lni lni-exit"></i> Logout
                </button>
                <NuxtLink
                  to="/admin/dashboard/mentee"
                  class="btn btn-sm btn-primary ml-auto"
                >
                  <i class="bi bi-speedometer2"></i> Dashboard
                </NuxtLink>
              </template>

              <template v-else-if="user.role === 'user'">
                <button
                  @click="logout"
                  class="btn btn-sm btn-light-secondary ml-auto"
                >
                  <i class="lni lni-exit"></i> Logout
                </button>
                <NuxtLink
                  to="/admin/dashboard/user"
                  class="btn btn-sm btn-primary ml-auto"
                >
                  <i class="bi bi-speedometer2"></i> Dashboard
                </NuxtLink>
              </template>

              <template v-else>
                <NuxtLink to="/login" class="btn btn-sm btn-light ml-auto"
                  >Sign In</NuxtLink
                >
                <NuxtLink to="/register" class="btn btn-sm btn-primary ml-auto"
                  >Get Started</NuxtLink
                >
              </template>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Props or data from API
const menu = ref(true);
const pageTitle = ref("Home");
const settings = ref({
  logo: "/logo.png",
  enable_multilingual: true,
});
const user = ref({ role: "" }); // 'admin', 'mentee', 'user', ''
const pages = ref([
  { slug: "about", title: "About Us" },
  { slug: "terms", title: "Terms" },
]);
const languages = ref([
  { slug: "en", name: "English" },
  { slug: "fr", name: "French" },
]);
const currentLang = ref({ short: "EN" });
const mainLinks = ref([
  { text: "Home", href: "/" },
  { text: "Mentors", href: "/mentors" },
  { text: "Blogs", href: "/blogs" },
  { text: "Faqs", href: "/faqs" },
  { text: "Contact", href: "/contact" },
]);

// Navbar toggler
const isNavbarOpen = ref(false);
const openDropdown = ref(null);

function toggleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value;
}

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name;
}

function logout() {
  // Call API or auth composable
  console.log("Logging out...");
}
</script>

<style scoped>
/* Optional: Keep your Bootstrap classes or migrate to Tailwind */
</style>
