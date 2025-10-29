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
// 🟢 Search form
const search = ref({
  name: "",
  category: "",
  country: "",
});

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


// This function would be replaced by nuxt-i18n's $t() function
const trans = (key: string) => {
  const translations: Record<string, string> = {
    'mentee': 'I am a Mentee',
    'mentor': 'I am a Mentor',
    'build-confidence-as-a-leader': 'Build confidence as a leader and give back.',
    'became-a-member': 'Become a Member',
    'workflow': 'Workflow',
    'workflow-title': 'How It Works',
    'categories': 'Categories',
    'browse-mentors-by-categories': 'Browse mentors by categories',
    'mentors': 'Mentors',
    'features': 'Features',
    'learn-that-new-skill-launch-that-project': 'Learn that new skill, launch that project',
    'discover-the-worlds-top-mentors': "Discover the world's top mentors",
    'blogs': 'Blogs',
    'learn-more-empower-yourself': 'Learn more, empower yourself',
    'testimonial': 'Testimonials',
    'testimonial-title': 'What our users say about',
  }
  return translations[key] || key
}


</script>

<template>
  <main>
    <HomeHero
      :settings="settings"
      :random-mentors="randomMentors"
      :categories="categories"
      :countries="countries"
      :trans="trans"
    />

    <HomeWorkflow
      v-if="workflows?.length"
      :workflows="workflows"
      :trans="trans"
    />

    <HomeCategories
      v-if="categories?.length"
      :categories="categories"
      :catCount="catCount"
    />

    <HomeFeatures
      v-if="features?.length"
      :features="features"
      :trans="trans"
    />

    <HomeTopMentors
      v-if="mentors?.length"
      :mentors="mentors"
      :trans="trans"
    />

    <HomeBlog
      v-if="posts?.length"
      :posts="posts"
      :trans="trans"
    />

    <HomeTestimonials
      v-if="testimonials?.length"
      :testimonials="testimonials"
      :trans="trans"
      :site-name="settings.site_name || 'OurApp'"
    />

    <HomeBrands
      v-if="brands?.length"
      :brands="brands"
    />
  </main>
</template>

