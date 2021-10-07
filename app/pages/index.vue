<template>
  <div class="container align-form">
    <h1 class="heading">OuseMouse</h1>
    <!-- <div class="text-center align-items-center justify-content-center"> -->
    <p class="text-center">
      Using OuseMouse, you can search a restaurant for reviews and ratings, add
      your own reviews, and even add your favourite restaurants for others to
      review!
    </p>
    <!-- </div> -->
    <hr />
    <h2>Search for a Restaurant</h2>
    <form class="align-items-center">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="searchText">Restaurant's Name</label>
          <input
            id="searchText"
            v-model="searchText"
            type="text"
            class="form-control"
            placeholder="Enter Restaurant's name"
            aria-label="Restaurant name"
            :disabled="!(selectedRating == 0)"
          />
        </div>
      </div>
      <div class="row justify-content-center mb-0">
        <p class="col-md-6 text-center mb-0">OR</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="searchRating">Search By Ratings</label>
          <select
            id="searchRating"
            v-model="selectedRating"
            class="form-select"
            :disabled="!(searchText == '')"
            aria-label="Search by ratings"
          >
            <option value="0">Search by ratings</option>
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary" @click="search()">
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      selectedRating: 0,
    }
  },
  watch: {
    searchText(oldVal, newVal) {
      if (newVal === '') {
        this.selectedRating = 0
      }
    },
  },
  methods: {
    search() {
      if (this.selectedRating) {
        this.$router.push({
          path: 'search',
          query: { rating: this.selectedRating },
        })
      } else {
        this.$router.push({
          path: 'search',
          query: { keyword: this.searchText || 'random' },
        })
      }
    },
  },
}
</script>
