<template>
  <div>
    <div id="restaurant-top-bar" class="row">
      <Map class="col-md-6 mb-4" />
      <img
        class="col-md-6"
        src="https://dynamicmedia.zuza.com/zz/m/original_/7/2/7266f0c7-32b2-4514-af18-1b9dd948b072/Osmow%20s%2004_Super_Portrait.jpg"
        alt="Restaurant Image"
        loading="lazy"
      />
    </div>
    <div class="container mt-5">
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
              <section id="about">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">
                  Osmow's is a fast casual Mediterranean restaurant capturing a
                  truly modern taste while giving customers the luxury of
                  customizing their preferences.
                </p>
              </section>
              <br />
              <section id="location">
                <h4 class="fst-italic">Location</h4>
                <p class="mb-0">Hamilton, Ontario</p>
              </section>
              <br />
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
            <h4 class="col">9 Reviews</h4>
            <SubmitReview class="col" />
          </div>
          <hr />
          <h4>Perfect place for dinner</h4>
          <p>⭐⭐⭐⭐</p>
          <p>
            Amazing restaurant. Had the Philly Veggie Wrap. Be careful as the
            sauce drips and can get stuck in beard.
          </p>
          <hr />
          <h4>Owner is friedly</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            He is always serving customers with a smile on his face. He is like
            a family member.
          </p>
          <hr />
          <h4>Always out of mushrooms</h4>
          <p>⭐</p>
          <p>
            I have never found mushrooms at this restaurant. I don't understand
            how they can operate such a big business but always be out of
            mushrooms. They need to fix this.
          </p>
          <hr />
          <h4>Expensive</h4>
          <p>⭐⭐</p>
          <p>Low quantity.<br />Not good for wallet.</p>
          <hr />
          <h4>Rude staff</h4>
          <p>⭐</p>
          <p>They need to learn customer service.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import SubmitReview from '@/components/SubmitReview.vue'
export default {
  components: {
    Map,
    SubmitReview,
  },
  data() {
    return {
      submitReviewEnabled: false,
    }
  },

  head: {
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
