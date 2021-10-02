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
              <option value="0">Search by ratings</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
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
  data() {
    return {
      searchText: "",
      selectedRating: 0
    };
  },
  watch: {
    searchText(oldVal, newVal) {
      if (newVal == "") {
        this.selectedRating = 0;
      }
    }
  },
  methods: {
    search() {
      if (this.selectedRating) {
        this.$router.push({
          path: "search",
          query: { rating: this.selectedRating }
        });
      } else {
        this.$router.push({
          path: "search",
          query: { keyword: this.searchText || "random" }
        });
      }
    }
  }
};
</script>
