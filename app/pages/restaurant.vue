<template>
  <!-- The view below represents the individual object page for the restaurant -->
  <!-- This component has been borrowed from the Bootstrap component example library and then modified to satisfy our requirements (https://getbootstrap.com/docs/4.0/examples/blog/) -->
  <div>
    <div id="restaurant-top-bar" class="row">
      <Map class="col-md-6 mb-4" />
      <!-- Restaurant's image -->
      <img
        class="col-md-6"
        src="https://dynamicmedia.zuza.com/zz/m/original_/7/2/7266f0c7-32b2-4514-af18-1b9dd948b072/Osmow%20s%2004_Super_Portrait.jpg"
        alt="Restaurant Image"
        loading="lazy"
      />
    </div>
    <div class="container mt-5">
      <!-- Restaurant's title -->
      <h3 class="pb-4 mb-4 border-bottom text-center">Osmows</h3>
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
              <section id="about">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">
                  Osmow's is a fast casual Mediterranean restaurant capturing a
                  truly modern taste while giving customers the luxury of
                  customizing their preferences.
                </p>
              </section>
              <br />
              <!-- Restaurant's location info -->
              <section id="location">
                <h4 class="fst-italic">Location</h4>
                <p class="mb-0">Hamilton, Ontario</p>
              </section>
              <br />
              <!-- Restaurant's operating hours  -->
              <section id="hours">
                <h4 class="fst-italic">Hours</h4>
                <p class="mb-0">Monday - 10:00 A.M - 9:00 P.M</p>
                <p class="mb-0">Tuesday - 10:00 A.M - 9:00 P.M</p>
                <p class="mb-0">Wednesday - 10:00 A.M - 9:00 P.M</p>
                <p class="mb-0">Thursday - 10:00 A.M - 9:00 P.M</p>
                <p class="mb-0">Friday - 10:00 A.M - 9:00 P.M</p>
                <p class="mb-0">Saturday - 10:00 A.M - 9:00 P.M</p>
                <p class="mb-0">Sunday - 10:00 A.M - 9:00 P.M</p>
              </section>
              <br />
              <!-- Restaurant's website  -->
              <section id="website">
                <h4 class="fst-italic">Website</h4>
                <a href="https://mrosmow.com/" class="plain-link" target="_"
                  >https://mrosmow.com/</a
                >
              </section>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <!-- Number of reviews -->
            <h4 class="col">9 Reviews</h4>
            <!-- Add your own review Modal component -->
            <SubmitReview class="col" />
          </div>
          <!-- Restaurant reviews-->
          <hr />
          <!-- Reusing the review component as defined in components/Review.vue -->
          <Review
            title="Perfect place for dinner"
            rating="4"
            review="Amazing restaurant. Had the Philly Veggie Wrap. Be careful as the sauce drips and can get stuck in beard."
            username="Alice Franklin"
            imageurl="https://randomuser.me/api/portraits/women/55.jpg"
          />
          <Review
            title="Owner is friedly"
            rating="5"
            review="He is always serving customers with a smile on his face. He is like a family member."
            username="Logan Craig"
            imageurl="https://randomuser.me/api/portraits/men/12.jpg"
          />
          <Review
            title="Always out of mushrooms"
            rating="2"
            review="I have never found mushrooms at this restaurant. I don't understand
            how they can operate such a big business but always be out of
            mushrooms. They need to fix this."
            username="Andy Mckinney"
            imageurl="https://randomuser.me/api/portraits/men/67.jpg"
          />
          <Review
            title="Expensive"
            rating="2"
            review="Low quantity. Not good for wallet."
            username="Mason Lowe"
            imageurl="https://randomuser.me/api/portraits/men/73.jpg"
          />
          <Review
            title="Rude Staff"
            rating="1"
            review="They need to learn customer service."
            username="Lynn Crawford"
            imageurl="https://randomuser.me/api/portraits/women/4.jpg"
          />
          <Review
            title="Better than Lazeez"
            rating="4"
            review="Would buy again."
            username="Justin Carter"
            imageurl="https://randomuser.me/api/portraits/men/77.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import Review from '@/components/Review.vue'
import SubmitReview from '@/components/SubmitReview.vue'
export default {
  components: {
    // Registering components
    Map,
    SubmitReview,
    Review,
  },
  head: {
    // Meta tag descriptions for Facebook's Open Graph Protocol and Twitter Cards
    title: 'Osmows',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'og:title',
        content: 'Osmows',
      },
      {
        name: 'og:type',
        content: 'Website',
      },
      {
        name: 'og:image',
        content:
          'https://mrosmow.com/wp-content/uploads/2019/01/Osmows-Straight-Logo.png',
      },
      {
        name: 'og:url',
        content: 'https://mrosmow.com/',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Osmows',
      },
      {
        name: 'twitter:description',
        content:
          "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      },
      {
        name: 'twitter:image',
        content:
          'https://mrosmow.com/wp-content/uploads/2019/01/Osmows-Straight-Logo.png',
      },
    ],
  },
}
</script>
