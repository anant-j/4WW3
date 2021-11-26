<template>
  <!-- The view below represents the individual object page for the restaurant -->
  <!-- This component has been borrowed from the Bootstrap component example library and then modified to satisfy our requirements (https://getbootstrap.com/docs/4.0/examples/blog/) -->
  <div v-if="restaurantId != -1">
    <div id="restaurant-top-bar" class="row">
      <Map id="restaurantMap" class="col-md-6 mb-1" />
      <!-- Restaurant's image -->
      <img
        v-if="restaurantDetails.image"
        class="col-md-6 food-img"
        height="500"
        width="100"
        :src="restaurantDetails.image"
        alt="Restaurant Image"
        loading="lazy"
      />
    </div>
    <div class="container mt-5">
      <!-- Restaurant's title -->
      <h3 class="pb-4 mb-4 border-bottom text-center">
        {{ restaurantDetails.name }}
      </h3>
      <div class="row g-5">
        <div class="col-md-4">
          <div class="position-sticky">
            <div
              class="p-4 rounded"
              :class="{
                'border-white': $store.state.nightMode,
                'border-dark': !$store.state.nightMode,
              }"
            >
              <!-- Restaurant's about info -->
              <section v-if="restaurantDetails.about" id="about">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">{{ restaurantDetails.about }}</p>
              </section>
              <br />
              <!-- Restaurant's location info -->
              <!-- <section v-if="restaurantDetails.address" id="location">
                <h4 class="fst-italic">Location</h4>
                <p class="mb-0">{{ restaurantDetails.address }}</p>
              </section>
              <br />-->
              <!-- Restaurant's website  -->
              <section v-if="restaurantDetails.website" id="website">
                <h4 class="fst-italic">Website</h4>
                <a
                  :href="restaurantDetails.website"
                  class="plain-link"
                  target="_"
                  >{{ restaurantDetails.website }}</a
                >
              </section>
              <section v-if="restaurantDetails.phone" id="phone">
                <h4 class="fst-italic">Phone</h4>
                <a
                  :href="`tel:` + restaurantDetails.phone"
                  class="plain-link"
                  target="_"
                  >{{ restaurantDetails.phone }}</a
                >
              </section>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <!-- Number of reviews -->
            <h4
              v-if="
                restaurantDetails.reviews &&
                restaurantDetails.reviews.length == 1
              "
              class="col"
            >
              1 Review
            </h4>
            <h4
              v-else-if="
                restaurantDetails.reviews &&
                restaurantDetails.reviews.length > 1
              "
              class="col"
            >
              {{ restaurantDetails.reviews.length }} Reviews
            </h4>
            <!-- Add your own review Modal component -->
            <SubmitReview class="col" />
          </div>
          <!-- Restaurant reviews-->
          <hr />
          <!-- Reusing the review component as defined in components/Review.vue -->
          <section id="reviews">
            <Review
              v-for="(review, id) in restaurantDetails.reviews"
              :key="id"
              :title="review.title"
              :rating="review.rating"
              :review="review.review"
              :username="review.username"
              :imageurl="review.imageurl"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Please wait while we load the restaurant...</div>
</template>

<script>
import Review from '@/components/Review.vue'
import SubmitReview from '@/components/SubmitReview.vue'
import Map from '@/components/Map.vue'
export default {
  components: {
    // Registering components
    SubmitReview,
    Review,
    Map,
  },
  data() {
    return {
      restaurantId: -1,
      restaurantDetails: {},
    }
  },
  head() {
    return {
      title: this.restaurantDetails.Name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'og:title',
          content: this.restaurantDetails.Name,
        },
        {
          name: 'og:type',
          content: 'Website',
        },
        {
          name: 'og:image',
          content: this.restaurantDetails.Image,
        },
        {
          name: 'og:url',
          content: this.restaurantDetails.website,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: this.restaurantDetails.Name,
        },
        {
          name: 'twitter:description',
          content: this.restaurantDetails.about,
        },
        {
          name: 'twitter:image',
          content: this.restaurantDetails.Image,
        },
      ],
    }
  },
  async created() {
    const id = this.$route.query.id
    const fetchFromCache = this.getRestaurantFromStore(id)
    if (!fetchFromCache) {
      const fetchFromDatabase = await this.fetchRestaurant(id)
      if (fetchFromDatabase) {
        this.getRestaurantFromStore(id)
      } else {
        this.$router.push({ path: '/' })
      }
    }
    this.$store.commit('centerMap')
  },
  methods: {
    // This method is called when the page is loaded
    async fetchRestaurant(id) {
      const response = await this.$api.getRestaurant(id)
      const result = await response.json()
      if (result.success) {
        this.$store.commit('addRestaurant', result.restaurant)
        return true
      } else {
        return false
      }
      // Fetching the restaurant details from the API
    },
    getRestaurantFromStore(id) {
      const details = this.$store.state.restaurants[id]
      if (details) {
        this.restaurantId = id
        this.restaurantDetails = details
        this.$store.commit('setActiveRestaurant', id)
        return true
      }
      return false
    },
  },
}
</script>
