<script setup lang="ts">
// 🟢 Fetching dynamic data (replace with your endpoints)
const { settings } = useSettingsStore();

const { data: randomMentors } = await useFetch("/api/mentors/random");
const { data: workflows } = await useFetch("/api/workflows");
const { data: categories } = await useFetch("/api/categories");
const { data: features } = await useFetch("/api/features");
//const { data: mentors } = await useFetch("/api/mentors");
//const { data: posts } = await useFetch("/api/posts");
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
async function mentorsByCategory(cat: Number) {
  return await useFetch("/api/mentors/count_by_categories");
}
console.log("Mentors: ", categories.value.data);
</script>

<template>
  <!-- HERO SECTION -->

  <UContainer>
    <UPageSection>
      <UTabs
        :items="[
          { label: 'Mentee', slot: 'mentee' },
          { label: 'Mentor', slot: 'mentor' },
        ]"
        variant="link"
        :ui="{ trigger: 'grow' }"
        class="gap-4 w-full"
        ><template #mentee>
          <UPageHero
            orientation="horizontal"
            :title="settings.site_title || ''"
            :description="settings.description || ''"
          >
            <div v-for="(mentor, index) in randomMentors.data" :key="index">
              <img
                class="rounded-full w-40 h-40 object-cover shadow-2xl ring ring-default items-rigt"
                :src="`/${mentor.image}`"
              /></div></UPageHero
        ></template>
        <template #mentor>
          <UPageHero
            orientation="horizontal"
            :title="settings.site_title_mentor || ''"
            description="Build confidence as a leader"
            :links="[{ label: 'Become a Mentor', to: '/register?trial=start' }]"
          >
            <span v-for="(mentor, index) in randomMentors.data" :key="index">
              <img
                class="rounded-full w-40 h-40 object-cover shadow-2xl ring ring-default"
                :src="`/${mentor.image}`"
              />
            </span> </UPageHero
        ></template>
      </UTabs>

      <form @submit.prevent="submitSearch" class="home-search">
        <UCard class="w-2/3">
          <div class="md:flex gap-2">
            <div class="w-full">
              <UInput
                class="min-w-full"
                v-model="search.name"
                placeholder="Search by mentor, language or role"
              ></UInput>
            </div>
            <div class="w-full">
              <USelect
                class="min-w-full"
                :items="categories.data"
                valueKey="name"
                labelKey="name"
              ></USelect>
            </div>
            <div class="w-full">
              <USelect
                class="min-w-full"
                :items="['Canada', 'USA', 'Mexico']"
              ></USelect>
            </div>
            <UButton class="" type="submit">Search</UButton>
          </div>
        </UCard>
      </form>
    </UPageSection>

    <UPageSection class="text-center"
      ><template #title
        ><h1 class="font-bold mx-auto">
          Look at a glance how our systems work
        </h1></template
      >
      <template #leading
        ><UBadge color="neutral" variant="outline">Workflow</UBadge></template
      >
      <template #features>
        <div v-for="(workflow, index) in workflows.data" :key="workflow.id">
          <div
            class="text-center m-2 py-8 px-6"
            :class="{ 'bg-white shadow-2xl': index === 1 }"
          >
            <img
              :src="workflow.image"
              class="mb-5 mx-auto rounded-[50%] border-1 border-green-200 p-3 h-[120px] w-[120px]"
              :alt="workflow.title"
            />
            <h5 class="font-bold mb-2">{{ workflow.title }}</h5>
            <p class="text-muted">{{ workflow.details }}</p>
          </div>
        </div>
      </template>
    </UPageSection>
    <UPageSection class="text-center"
      ><template #title
        ><h1 class="font-bold mx-auto">
          Browse Mentors by Categories
        </h1></template
      >
      <template #leading
        ><UBadge color="neutral" variant="outline">Categories</UBadge></template
      >
      <template #features>
        <div v-for="(category, index) in categories.data" :key="categories.id">
          <UCard>
            <div class="text-center m-2 py-8 px-6">
              <i :class="`${category.icon} text-[20px]`" />

              <h5 class="font-bold mb-2">{{ category.name }}</h5>
              <h5 class="font-bold mb-2">
                Mentors {{ mentorsByCategory(category.id) }}
              </h5>
            </div>
          </UCard>
        </div>
      </template>
    </UPageSection>
    <div class="row">
      <div class="col-md-12 home-image-main">
        <div class="hero-mentors-imgs">
          <div class="tab-content" id="myTabContent">
            <!-- Mentee -->
            <div class="tab-pane fade show active" id="one">
              <div class="col-lg-10 mb-8 pl-0">
                <form
                  @submit.prevent="submitSearch"
                  class="home-search style-two"
                >
                  <div class="row align-items-center">
                    <div class="col-md-4">
                      <div class="form-group has-search">
                        <span
                          class="bi bi-search text-primary form-control-feedback"
                        ></span>
                        <input
                          v-model="search.name"
                          type="text"
                          placeholder="Search by mentor, language or role"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-3">
                      <select v-model="search.category" class="form-control">
                        <option value="">Categories</option>
                        <option
                          v-for="cat in categories"
                          :key="cat.id"
                          :value="cat.id"
                        >
                          {{ cat.name }}
                        </option>
                      </select>
                    </div>

                    <div class="col-md-3">
                      <select v-model="search.country" class="form-control">
                        <option value="">Country</option>
                        <!-- Replace with your countries API -->
                        <option value="1">Canada</option>
                        <option value="2">USA</option>
                      </select>
                    </div>

                    <div class="col-md-2">
                      <button
                        type="submit"
                        class="btn btn-primary btn-md w-100"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!-- Mentor -->
            <div class="tab-pane fade" id="two">
              <div class="col-md-12 pt-8 pl-0 text-left">
                <h1 class="display-4 mb-2 font-weight-bold">
                  {{ settings?.site_title_mentor }}
                </h1>
                <p class="text-muted fs-20 mt-2 mb-5">
                  Build confidence as a leader
                </p>
                <NuxtLink
                  to="/register?trial=start"
                  class="btn btn-lg btn-primary mt-4"
                >
                  Become a Member
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>

  <!-- WORKFLOW -->
  <section v-if="workflows?.length" class="zindex-low py-12">
    <div class="container">
      <div class="text-center mx-auto mb-8">
        <span class="badge badge-secondary-soft mb-3">Workflow</span>
        <h1 class="text-dark font-weight-bold">How It Works</h1>
      </div>

      <div class="row">
        <div
          v-for="(workflow, index) in workflows"
          :key="workflow.id"
          class="col-md-4 mb-7"
          data-aos="zoom-in-up"
          :data-aos-delay="index * 150"
        >
          <div
            class="text-center m-2 py-6 px-4"
            :class="{ 'shadow-workflow': index === 1 }"
          >
            <img :src="workflow.image" class="mb-5" :alt="workflow.title" />
            <h5 class="mb-2">{{ workflow.title }}</h5>
            <p class="text-muted">{{ workflow.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CATEGORIES -->
  <section v-if="categories?.length" class="bg-primary-soft py-12">
    <div class="container text-center">
      <div class="mb-8">
        <span class="badge badge-secondary-soft mb-3">Categories</span>
        <h1>Browse mentors by categories</h1>
      </div>

      <div class="row">
        <div
          v-for="(category, index) in categories"
          :key="category.id"
          class="col-md-3 col-sm-6 mb-4"
          :data-aos-delay="index * 100"
          data-aos="zoom-in-up"
        >
          <NuxtLink :to="`/mentors?category=${category.slug}`">
            <div class="template-box text-center shadow-sm rounded-1 p-4">
              <i :class="category.icon + ' fs-20 mb-3'"></i>
              <p class="fw-bold mb-1">{{ category.name }}</p>
              <p class="text-muted">{{ category.mentor_count }} mentors</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section v-if="features?.length" class="bg-white py-12">
    <div class="container text-center">
      <div class="mb-8">
        <span class="badge badge-secondary-soft mb-3">Features</span>
        <h1>Learn new skills and launch your project</h1>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="col-md-4 mb-5"
          :data-aos-delay="index * 100"
          data-aos="zoom-in-up"
        >
          <div class="template-box text-left shadow-sm rounded-1 p-4">
            <img :src="feature.image" class="mb-3 w-25" :alt="feature.name" />
            <h5 class="text-dark mb-2">{{ feature.name }}</h5>
            <p class="text-muted">{{ feature.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MENTORS -->
  <section v-if="mentors?.length" class="py-12">
    <div class="container">
      <h3 class="mb-4">Discover the world’s top mentors</h3>
      <div class="row">
        <div
          v-for="(mentor, index) in mentors"
          :key="mentor.id"
          class="col-md-3 col-sm-6 mb-4"
        >
          <div class="card shadow-sm">
            <img :src="mentor.image" class="card-img-top" :alt="mentor.name" />
            <div class="card-body text-center">
              <h6 class="mb-1">{{ mentor.name }}</h6>
              <p class="text-muted small">{{ mentor.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BLOGS -->
  <section v-if="posts?.length" class="bg-lights py-12">
    <div class="container text-center">
      <span class="badge badge-primary-soft mb-3">Blogs</span>
      <h1 class="text-dark font-weight-bold mb-8">
        Learn more. Empower yourself.
      </h1>

      <div class="row">
        <div
          v-for="(post, index) in posts"
          :key="post.id"
          class="col-md-4 mb-4"
        >
          <div class="card shadow-sm border-0 h-100">
            <img :src="post.image" class="card-img-top" :alt="post.title" />
            <div class="card-body text-left">
              <h5>{{ post.title }}</h5>
              <p class="text-muted">{{ post.excerpt }}</p>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="btn btn-link text-primary p-0"
              >
                Read more →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section v-if="testimonials?.length" class="bg-light py-12">
    <div class="container text-center">
      <span class="badge badge-secondary-soft mb-3">Testimonials</span>
      <h1 class="text-dark font-weight-bold mb-8">
        What people say about
        <b class="text-primary">{{ settings?.site_name }}</b>
      </h1>

      <div class="row justify-content-center">
        <div
          v-for="(t, index) in testimonials"
          :key="t.id"
          class="col-md-4 mb-4"
        >
          <div class="card shadow-none border h-100 bg-lights p-4">
            <div
              class="avatar-sm mx-auto mb-3"
              :style="{ backgroundImage: `url(${t.image})` }"
            ></div>
            <h5 class="mb-1">{{ t.name }}</h5>
            <p class="text-muted small">{{ t.designation }}</p>
            <p class="text-muted">{{ t.feedback }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BRANDS -->
  <section v-if="brands?.length" class="bg-grays py-6 border-top">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="col-md-2 col-sm-3 col-4 text-center mb-3"
        >
          <a :href="brand.link" target="_blank">
            <div
              class="brand_img"
              :style="{ backgroundImage: `url(${brand.logo})` }"
            ></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
