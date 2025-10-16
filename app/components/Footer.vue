<script setup>
//import { useSettingsStore } from "~/stores/website";

const menu = ref(true);

// Mock dynamic data (replace with API/composable calls)

const pages = ref([
  { slug: "about", title: "About Us" },
  { slug: "terms", title: "Terms & Conditions" },
]);

// Scroll behavior
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Handle PWA installation prompt
function installPWA() {
  console.log("Installing PWA...");
  // Optionally integrate with usePWA() composable if available
}
const { settings, loading } = useSettingsStore();
</script>

<template>
  <footer v-if="menu && !loading" class="pt-8 border-top border-light">
    <div class="container">
      <div class="row pb-5">
        <!-- About & Social -->
        <div class="col-sm-5 col-lg-5 mb-5 mb-lg-0">
          <img :src="settings.logo" class="w-30 mb-4" alt="logo" />
          <p>{{ settings.footer_about }}</p>

          <ul class="list-unstyled social-icon3 mb-0">
            <li v-if="settings.facebook">
              <a :href="settings.facebook" target="_blank"
                ><i class="lni lni-facebook-original"></i
              ></a>
            </li>
            <li v-if="settings.twitter">
              <a :href="settings.twitter" target="_blank"
                ><i class="lni lni-twitter"></i
              ></a>
            </li>
            <li v-if="settings.linkedin">
              <a :href="settings.linkedin" target="_blank"
                ><i class="lni lni-linkedin-original"></i
              ></a>
            </li>
            <li v-if="settings.instagram">
              <a :href="settings.instagram" target="_blank"
                ><i class="lni lni-instagram-original"></i
              ></a>
            </li>
          </ul>
        </div>

        <div class="col-sm-1 col-lg-1 mb-5 mb-sm-0"></div>

        <!-- Services -->
        <div class="col-sm-3 col-lg-3 mb-5 mb-lg-0">
          <h3 class="h6">Services</h3>
          <ul class="footer-list-style-two">
            <li><NuxtLink to="/mentors">Mentors</NuxtLink></li>
            <li v-if="settings.enable_blog">
              <NuxtLink to="/blogs">Blogs</NuxtLink>
            </li>
            <li v-if="settings.enable_faq">
              <NuxtLink to="/faqs">Faqs</NuxtLink>
            </li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Dynamic Pages -->
        <div v-if="pages.length" class="col-sm-3 col-lg-3 mb-5 mb-sm-0">
          <h3 class="h6">Pages</h3>
          <ul class="footer-list-style-two">
            <li v-for="page in pages" :key="page.slug">
              <NuxtLink :to="`/page/${page.slug}`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center border-top border-light">
      <div class="container">
        <div class="row py-4">
          <div class="col-md-12">
            <p class="mb-0">{{ settings.copyright }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional Install PWA Button -->
    <button
      v-if="settings.enable_pwa"
      id="installPwa"
      class="btn btn-primary bg-primary-soft"
      @click="installPWA"
    >
      <i class="bi bi-arrow-down-circle-fill fs-15"></i> Install PWA
    </button>

    <!-- Scroll to top -->
    <button class="scroll-to-top" @click="scrollToTop">
      <i class="fa fa-angle-up"></i>
    </button>
  </footer>
</template>
