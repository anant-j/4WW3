<template>
  <!-- The view below represents the individual object page for the restaurant -->
  <!-- This component has been borrowed from the Bootstrap component example library and then modified to satisfy our requirements (https://getbootstrap.com/docs/4.0/examples/blog/) -->
  <div v-if="restaurantId!=-1">
    <div id="restaurant-top-bar" class="row">
      <Map class="col-md-6 mb-1" style="min-height:25vh" />
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
                <p class="mb-0">
                  {{ restaurantDetails.about }}
                </p>
              </section>
              <br />
              <!-- Restaurant's location info -->
              <section v-if="restaurantDetails.address" id="location">
                <h4 class="fst-italic">Location</h4>
                <p class="mb-0">{{ restaurantDetails.address }}</p>
              </section>
              <br />
              <!-- Restaurant's operating hours  -->
              <section v-if="restaurantDetails.hours" id="hours">
                <h4 class="fst-italic">Hours</h4>
                <p v-if="restaurantDetails.hours.monday" class="mb-0">
                  Monday - {{ restaurantDetails.hours.monday }}
                </p>
                <p v-else class="mb-0">Monday - Closed</p>
                <p v-if="restaurantDetails.hours.tuesday" class="mb-0">
                  Tuesday - {{ restaurantDetails.hours.tuesday }}
                </p>
                <p v-else class="mb-0">Tuesday - Closed</p>
                <p v-if="restaurantDetails.hours.wednesday" class="mb-0">
                  Wednesday - {{ restaurantDetails.hours.wednesday }}
                </p>
                <p v-else class="mb-0">Wednesday - Closed</p>
                <p v-if="restaurantDetails.hours.thursday" class="mb-0">
                  Thursday - {{ restaurantDetails.hours.thursday }}
                </p>
                <p v-else class="mb-0">Thursday - Closed</p>
                <p v-if="restaurantDetails.hours.friday" class="mb-0">
                  Friday - {{ restaurantDetails.hours.friday }}
                </p>
                <p v-else class="mb-0">Friday - Closed</p>
                <p v-if="restaurantDetails.hours.saturday" class="mb-0">
                  Saturday - {{ restaurantDetails.hours.saturday }}
                </p>
                <p v-else class="mb-0">Saturday - Closed</p>
                <p v-if="restaurantDetails.hours.sunday" class="mb-0">
                  Sunday - {{ restaurantDetails.hours.sunday }}
                </p>
                <p v-else class="mb-0">Sunday - Closed</p>
              </section>
              <br />
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
        <div v-if="restaurantDetails.reviews" class="col-md-8">
          <div class="row">
            <!-- Number of reviews -->
            <h4 v-if="restaurantDetails.reviews.length == 1" class="col">
              1 Review
            </h4>
            <h4 v-else class="col">
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
  <div v-else>
    Please wait while we load the restaurant...
  </div>
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
      title: this.restaurantDetails.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'og:title',
          content: this.restaurantDetails.name,
        },
        {
          name: 'og:type',
          content: 'Website',
        },
        {
          name: 'og:image',
          content:
            this.restaurantDetails.image,
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
          content: this.restaurantDetails.name,
        },
        {
          name: 'twitter:description',
          content:this.restaurantDetails.about
        },
        {
          name: 'twitter:image',
          content:
            this.restaurantDetails.image,
        },
      ],
    }
  },
  created() {
    const id = this.$route.query.id
    const details = this.$store.state.restaurants[id]
    if (details) {
      this.restaurantId = id
      this.restaurantDetails = details
      this.$store.commit('setActiveRestaurant', id)
    } else {
      this.$router.push({ path: '/' })
    }
  },
}
</script>
