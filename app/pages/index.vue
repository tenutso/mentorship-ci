<script setup lang="ts">
import { useHead } from "#app";

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
      innerHTML: `
          :root {
            --site-color: #${settings.site_color};
            --site-font: '${settings.site_font}';
            --rgb: '${hexToRgb(settings.site_color)}';
          }
        `,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/front/fonts/bootstrap/bootstrap-icons.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/front/libs/font-awesome/css/fontawesome-all.min.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/css/sweet-alert.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/plugins/line-icons/lineicons.css",
    },

    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/css/nice-select.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/plugins/select2/css/select2.min.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/plugins/select2/css/select2.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/css/bootstrap-tagsinput.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/front/css/template.css",
    },
    {
      rel: "stylesheet",
      href: `/assets/front/css/aos.css`,
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/front/libs/owl-carousel/dist/css/owl.carousel.min.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/front/libs/owl-carousel/dist/css/owl.theme.default.min.css",
    },

    {
      rel: "stylesheet",
      href: `https://fonts.googleapis.com/css?family=${settings.site_font}:400,500,600,700`,
    },
    {
      rel: "stylesheet",
      href: `/assets/front/css/style-over.css`,
    },

    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/admin/css/custom-ltr.css",
    },

    {
      rel: "stylesheet",
      type: "text/css",
      href: "/assets/front/css/style-search.css",
    },
  ],
});

const { data: randomMentors } = await useFetch("/api/mentors/random");
const { data: workflows } = await useFetch("/api/workflows");
const { data: categories } = await useFetch("/api/categories");
const { data: features } = await useFetch("/api/features");
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
</script>

<template>
  <!-- HERO SECTION -->
  <section class="border-bottom border-light pt-12 pb-12 bsection">
    <div class="container">
      <div class="row">
        <div class="col-md-12 home-image-main">
          <div class="hero-mentors-imgs">
            <div
              v-for="(mentor, index) in randomMentors"
              :key="index"
              class="home-image-sm"
              data-aos="zoom-in"
              :data-aos-delay="(index + 1) * 100"
              :style="{ backgroundImage: `url(${mentor.image})` }"
            />
            <i class="bi bi-bell home-icon-1 text-light1 fs-25"></i>
            <i
              class="bi bi-person-bounding-box home-icon-2 text-light2 fs-30"
            ></i>
            <i class="bi bi-box-seam home-icon-4 text-light3 fs-30"></i>
          </div>

          <!-- Tabs -->
          <div class="tab-card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item ml-0">
                <a
                  class="nav-link active"
                  data-bs-toggle="tab"
                  href="#mentee"
                  role="tab"
                  >Mentee</a
                >
              </li>
              <li class="nav-item ml-0">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#mentor"
                  role="tab"
                  >Mentor</a
                >
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <!-- Mentee -->
              <div class="tab-pane fade show active" id="one">
                <div class="col-md-12 pt-8 pl-0">
                  <h1 class="display-4 mb-2 font-weight-bold">
                    {{ settings?.site_title }}
                  </h1>
                  <p class="text-muted fs-20 mt-2 mb-5">
                    {{ settings?.description }}
                  </p>
                </div>

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
    </div>
  </section>

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

<style scoped>
.hero-mentors-imgs > div {
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 150px;
  width: 150px;
  display: inline-block;
  margin: 0 5px;
}
.avatar-sm {
  width: 80px;
  height: 80px;
  background-size: cover;
  border-radius: 50%;
}
.brand_img {
  width: 120px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
