<template>
  <!-- This is the home view that is displayed when the website/application is initially rendered. This is the default view on default path (www.domain.com/)  -->
  <div class="container align-form">
    <!-- Website Title -->
    <h1 class="heading">OuseMouse</h1>
    <!-- Website Description -->
    <p class="text-center">
      Using OuseMouse, you can search a restaurant for reviews and ratings, add
      your own reviews, and even add your favourite restaurants for others to
      review!
    </p>
    <hr />
    <!-- Search area starts below-->
    <h2>Search for a Restaurant</h2>
    <form class="align-items-center">
      <!-- Search area starts below-->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="searchText">Restaurant's Name</label>
          <!-- The input field takes the name/keywords to search for restaurants. It gets disabled if a rating has been selected from the dropdown below this field -->
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
          <!-- The select field takes the ratings to search for restaurant. It gets disabled if a keyword has been entered in the text box above this field -->
          <select
            id="searchRating"
            v-model="selectedRating"
            class="form-select"
            :disabled="!(searchText == '')"
            aria-label="Search by ratings"
          >
            <option value="0">Search by ratings</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center">
        <p class="col-md-6 text-center mb-0">OR</p>
      </div>
      <div class="row justify-content-center">
        <button
          type="button"
          class="col-3 btn btn-warning"
          :disabled="
            !(selectedRating == 0 && searchText == '') ||
            $store.state.userLocation.status == 2
          "
          @click="searchByLocation()"
        >
          <span v-if="$store.state.userLocation.status == 2"
            >An error occured. Please check your browser's permissions.</span
          ><span v-else>Search By Location</span>
        </button>
      </div>
      <div class="row justify-content-center mt-3">
        <button
          type="button"
          class="col-3 btn btn-primary"
          :disabled="selectedRating == 0 && searchText == ''"
          @click="search()"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import geolocation from "~/mixins/geolocation.js";
export default {
  mixins: [geolocation],
  data() {
    return {
      searchText: "", // Data property for the search text entered
      selectedRating: 0, // Data property for the rating selected
    };
  },
  methods: {
    searchByLocation() {
      this.getLocation(true);
    },
    search() {
      // This method adds page redirection with query fields to search for the restaurant.
      // Currently, this is dumb redirection logic and will not impact the results page in any manner.
      if (this.selectedRating) {
        this.$router.push({
          path: "search",
          query: { by: "rating", value: this.selectedRating },
        });
      } else {
        this.$router.push({
          path: "search",
          query: { by: "keyword", value: this.searchText },
        });
      }
    },
  },
};
</script>
