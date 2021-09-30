<template>
  <section class="mt-3 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Restaurant's name"
              aria-label="Restaurant name"
              v-model="searchText"
              :disabled="!(this.selectedRating == 0)"
            />
          </div>
          <span>Or</span>
          <div class="col">
            <select
              class="form-select"
              v-model="selectedRating"
              :disabled="!(this.searchText == '')"
              aria-label="Search by ratings"
            >
              <option
                v-for="rating in ratingOptions"
                :key="rating"
                :value="rating.key"
              >
                {{ rating.text }}
              </option>
            </select>
          </div>
        </div>
        <br />
        <p>
          <button class="btn btn-secondary" @click="search()">Search</button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
      selectedRating: 0,
      ratingOptions: [
        { text: "Select One", key: 0, value: null },
        { text: "One", key: 1, value: 1 },
        { text: "One point five", key: 2, value: 1.5 },
        { text: "Two", key: 3, value: 2 },
      ],
    };
  },
  watch: {
    searchText(oldVal, newVal) {
      if (newVal == "") {
        this.selectedRating = 0;
      }
    },
  },
  methods: {
    search() {
      if (this.searchText) {
        this.$router.push({
          path: "search",
          query: { keyword: this.searchText },
        });
      }
      if (this.selectedRating) {
        this.$router.push({
          path: "search",
          query: { rating: this.selectedRating },
        });
      }
    },
  },
};
</script>
