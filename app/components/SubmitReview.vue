<template>
  <!-- This component is used inside the Restaurant's object page as a modal when a User adds their own review -->
  <!-- This component has been borrowed from the Bootstrap component example library and then modified to satisfy our requirements -->
  <div>
    <button
      type="button"
      class="btn btn-info"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      :disabled="!$store.state.user.loggedIn"
    >
      <span v-if="$store.state.user.loggedIn">Add your review</span>
      <span v-else>Login to add your review</span>
    </button>
    <div
      id="staticBackdrop"
      ref="myModal"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            class="modal-header"
            :class="{
              'background-light': !$store.state.nightMode,
              'text-dark': !$store.state.nightMode,
              'background-dark': $store.state.nightMode,
              'text-light': $store.state.nightMode,
            }"
          >
            <h5 id="staticBackdropLabel" class="modal-title">
              Add your review
            </h5>
            <button
              ref="closeButton"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body"
            :class="{
              'background-light': !$store.state.nightMode,
              'text-dark': !$store.state.nightMode,
              'background-dark': $store.state.nightMode,
              'text-light': $store.state.nightMode,
            }"
          >
            <form class="align-items-center">
              <div class="row justify-content-center mt-3">
                <div class="col">
                  <label for="title">Review Title</label>
                  <input
                    id="title"
                    v-model="title"
                    type="text"
                    class="form-control"
                    placeholder="Enter Review Title"
                  />
                </div>
              </div>
              <div class="row justify-content-center mt-3">
                <div class="col">
                  <label for="experienceRating">Rate your experience</label>
                  <select
                    id="experienceRating"
                    v-model="rating"
                    class="form-select"
                    aria-label="Experience"
                  >
                    <option selected>Rate your experience</option>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                  </select>
                </div>
              </div>
              <div class="row justify-content-center mt-3">
                <div class="col">
                  <label for="description">Review</label>
                  <textarea
                    id="review"
                    v-model="review"
                    type="text"
                    class="form-control"
                    placeholder="Enter Review"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            class="modal-footer"
            :class="{
              'background-light': !$store.state.nightMode,
              'text-dark': !$store.state.nightMode,
              'background-dark': $store.state.nightMode,
              'text-light': $store.state.nightMode,
            }"
          >
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="submitReview">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notification from '~/mixins/notification.js'

export default {
  mixins: [notification],
  data() {
    return {
      title: '',
      rating: '',
      review: '',
    }
  },
  methods: {
    async submitReview() {
      // this.apiCallInProgress = true
      const restaurantId = parseInt(this.$route.query.id)
      if (!restaurantId) {
        return
      }
      const response = await this.$api.addReview(
        restaurantId,
        this.title,
        this.rating,
        this.review,
        this.$store.state.user.jwt
      )
      const result = await response.json()
      if (result.success) {
        // this.$store.commit('addReview', result.data)
        this.showToast('Review added successfully')
      } else {
        this.showToast('An error occurred. Please try again later.')
      }
      this.$store.commit('loadReviews', true);
      this.$refs.closeButton.click()
    },
  },
}
</script>
