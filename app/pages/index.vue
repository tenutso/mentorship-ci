<script setup lang="ts">
// 🟢 Fetching dynamic data (replace with your endpoints)

const { settings } = await useSettingsStore();

const { data: countries } = await useFetch("/api/countries");
const { data: randomMentors } = await useFetch("/api/mentors/random");
const { data: workflows } = await useFetch("/api/workflows");
const { data: categories } = await useFetch("/api/categories");
const { data: catCount } = await useFetch("/api/mentors/count_by/categories");
const { data: features } = await useFetch("/api/product_services");
const { data: mentors } = await useFetch("/api/mentors");
const { data: posts } = await useFetch("/api/posts");
const { data: testimonials } = await useFetch("/api/testimonials");
const { data: brands } = await useFetch("/api/brands");
const { data: pages } = await useFetch("/api/pages");
// 🟢 Search form
const search = ref({
  name: "",
  category: "",
  country: "",
});
const showMenu = ref(true)

const submitSearch = () => {
  navigateTo({
    path: "/mentors",
    query: {
      name: search.value.name,
      category: search.value.category,
      country: search.value.country,
    },
  });
};

</script>

<template>
    <HomeHero
      :settings="settings"
      :randomMentors="randomMentors"
      :categories="categories"
      :countries="countries"
    />

    <HomeWorkflow
      v-if="workflows?.length"
      :workflows="workflows"
    />

    <HomeCategories
      v-if="categories?.length"
      :categories="categories"
      :catCount="catCount"
    />

    <HomeFeatures
      v-if="features?.length"
      :features="features"
    />

    <HomeTopMentors
      v-if="mentors?.length"
      :mentors="mentors"
    />

    <HomeBlog
      v-if="posts?.length"
      :posts="posts"
    />

    <HomeTestimonials
      v-if="testimonials?.length"
      :testimonials="testimonials"
      :site-name="settings.site_name || 'OurApp'"
    />

    <HomeBrands
      v-if="brands?.length"
      :brands="brands"
    />
    <Footer
      v-if="showMenu && !pending"
      :settings="settings"
      :pages="pages"
    />

    <UNotifications />

    <ScrollToTop />
</template>

