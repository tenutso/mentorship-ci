<script setup lang="ts">
// Define the props this component expects from pages/index.vue
const props = defineProps<{
  settings: Record<string, any>;
  randomMentors: any[];
  categories: any[];
  countries: any[];
}>();

// State for the form inputs
const searchName = ref("");
const selectedCategory = ref(undefined);
const selectedCountry = ref(undefined);

// Format data for USelectMenu
//console.log(props.categories);
const categoryOptions = (props: { categories: any[] }) =>
  props.categories.map((c) => ({ label: c.name, value: c.id }));
const countryOptions = (props: { countries: any[] }) =>
  props.countries.map((c) => ({ label: c.name, value: c.id }));

function handleSearch() {
  console.log("Searching for:", {
    name: searchName.value,
    category: selectedCategory.value,
    country: selectedCountry.value,
  });
  // Here you would navigate to the search page
  // await navigateTo(`/mentors?search=${searchName.value}&category=${selectedCategory.value?.value}`)
}

// Define the tabs for Nuxt UI
const tabItems = [
  { slot: "mentee", label: $t("mentee") },
  { slot: "mentor", label: $t("mentor") },
];
</script>

<template>
  <UContainer
    as="section"
    class="py-12 border-b border-gray-200 dark:border-gray-800 relative"
  >
    <div
      class="absolute top-0 right-0 h-full w-1/2 opacity-20 md:opacity-100 -z-10 hidden lg:block"
    >
      <div class="relative w-full h-full">
        <div
          v-if="randomMentors[0]"
          class="absolute top-10 left-0 w-24 h-24 rounded-full bg-cover shadow-lg"
          :style="{ backgroundImage: `url(${randomMentors[0].image})` }"
        />
        <div
          v-if="randomMentors[1]"
          class="absolute top-20 left-40 w-32 h-32 rounded-full bg-cover shadow-lg"
          :style="{ backgroundImage: `url(${randomMentors[1].image})` }"
        />
        <div
          v-if="randomMentors[2]"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cover shadow-lg"
          :style="{ backgroundImage: `url(${randomMentors[2].image})` }"
        />
        <div
          v-if="randomMentors[3]"
          class="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-cover shadow-lg"
          :style="{ backgroundImage: `url(${randomMentors[3].image})` }"
        />
        <div
          v-if="randomMentors[0]"
          class="absolute bottom-10 left-20 w-28 h-28 rounded-full bg-cover shadow-lg"
          :style="{ backgroundImage: `url(${randomMentors[0].image})` }"
        />
      </div>
    </div>

    <UTabs
      :items="tabItems"
      :ui="{ list: 'w-auto', trigger: 'min-w-fit px-4' }"
    >
      <template #mentee>
        <div class="pt-8">
          <h1
            class="text-4xl md:text-5xl lg:w-3/5 font-bold mb-2 text-gray-900 dark:text-white"
          >
            {{ settings.siteTitle }}
          </h1>
          <p
            class="text-lg lg:w-1/2 text-gray-500 dark:text-gray-400 mt-2 mb-5"
          >
            {{ settings.description }}
          </p>

          <form
            class="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-4xl"
            @submit.prevent="handleSearch"
          >
            <div class="flex flex-col md:flex-row items-center gap-4">
              <UInput
                v-model="searchName"
                icon="i-heroicons-magnifying-glass"
                size="lg"
                placeholder="Search by mentor, language or role"
                class="flex-1"
                :ui="{ wrapper: 'w-full md:w-auto' }"
              />
              <USelectMenu
                v-model="selectedCategory"
                :items="categoryOptions(props)"
                placeholder="Categories"
                size="lg"
                class="flex-1"
                :ui="{ wrapper: 'w-full md:w-auto' }"
              />
              <USelectMenu
                v-model="selectedCountry"
                :items="countryOptions(props)"
                placeholder="Country"
                size="lg"
                class="flex-1"
                :ui="{ wrapper: 'w-full md:w-auto' }"
              />
              <UButton
                type="submit"
                label="Search"
                size="lg"
                class="w-full md:w-auto"
              />
            </div>
          </form>
        </div>
      </template>

      <template #mentor>
        <div class="pt-8">
          <h1
            class="text-4xl md:text-5xl lg:w-3/S font-bold mb-2 text-gray-900 dark:text-white"
          >
            {{ settings.siteTitleMentor }}
          </h1>
          <p
            class="text-lg lg:w-1/2 text-gray-500 dark:text-gray-400 mt-2 mb-5"
          >
            {{ $t("build-confidence-as-a-leader") }}
          </p>

          <UButton
            to="/register?trial=start"
            :label="$t('became-a-member')"
            size="lg"
            trailing-icon="i-heroicons-arrow-right-20-solid"
          />
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>
