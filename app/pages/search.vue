<template>
  <!-- This is the results page that is displayed after a search has been made -->
  <Loader v-if="loading" />
  <div v-else class="row container-fluid mt-3">
    <div class="col mb-1 searchMap">
      <!-- Display the map component with results -->
      <Map ref="liveMap" class="col mb-1 h-100" />
    </div>
    <!-- Display the list component with results -->
    <div class="col-md-3">
      <div class="text-center">
        <button class="btn btn-primary" @click="$refs.liveMap.recenterBounds()">
          Focus Map
        </button>
        <button class="btn btn-info" @click="$refs.liveMap.panCenter()">
          Where am I?
        </button>
      </div>
      <br />
      <List />
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import Map from '@/components/Map.vue'
import Loader from '@/components/Loader.vue'
export default {
  components: {
    // Registering components
    List,
    Map,
    Loader,
  },
  data() {
    return {
      // Initializing data
      type: null,
      loading: true,
    }
  },
  watch: {
    '$store.state.mapBounds'() {
      if (this.type === 'location') {
        const restaurants = this.$store.state.restaurants
        this.$store.commit('clearActiveRestaurants')
        for (const restaurant of Object.keys(restaurants)) {
          if (
            this.isWithinBounds(
              restaurants[restaurant].latitude,
              restaurants[restaurant].longitude,
              this.$store.state.mapBounds
            )
          ) {
            this.$store.commit('addActiveRestaurant', restaurant)
          }
        }
      }
    },
  },
  async created() {
    const searchBy = this.$route.query.by
    this.loading = true
    if (searchBy === 'location') {
      this.type = 'location'
      await this.fetchRestaurant()
    } else if (searchBy === 'rating') {
      this.type = 'rating'
      await this.fetchRestaurant('rating', this.$route.query.value)
    } else if (searchBy === 'keyword') {
      this.type = 'keyword'
      await this.fetchRestaurant('keyword', this.$route.query.value)
    } else {
      this.$router.push({ path: '/' })
    }
    this.loading = false
  },
  methods: {
    // Methods
    isWithinBounds(latitude, longitude, bounds) {
      if (
        latitude < bounds.northEast.latitude &&
        latitude > bounds.southWest.latitude &&
        longitude < bounds.northEast.longitude &&
        longitude > bounds.southWest.longitude
      ) {
        return true
      }
      return false
    },
    async fetchRestaurant(type = null, value = null) {
      let response
      if (type === 'keyword') {
        response = await this.$api.getRestaurants(value)
      } else if (type === 'rating') {
        response = await this.$api.getRestaurants(null, value)
      } else {
        response = await this.$api.getRestaurants()
      }
      const result = await response.json()
      this.$store.commit('clearActiveRestaurants')
      if (result.success) {
        for (const restaurant of result.restaurant) {
          this.$store.commit('addRestaurant', restaurant)
          this.$store.commit('addActiveRestaurant', restaurant.ID)
        }
        this.$store.commit('centerMap')
        return true
      } else {
        return false
      }
      // Fetching the restaurant details from the API
    },
  },
}
</script>
