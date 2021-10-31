<template>
  <!-- This is the results page that is displayed after a search has been made -->
  <div class="row container-fluid mt-3">
    <div class="col mb-1 searchMap">
      <!-- Display the map component with results -->
      <Map ref="liveMap" class="col mb-1 h-100" />
    </div>
    <!-- Display the list component with results -->
    <div class="col-md-3">
      <div class="text-center">
        <button
          class="btn btn-primary"
          @click="$refs.liveMap.recenterBounds()"
        >
          Focus Map
        </button>
        <button
          class="btn btn-info"
          @click="$refs.liveMap.panCenter()"
        >
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
export default {
  components: {
    // Registering components
    List,
    Map,
  },
  data() {
    return {
      // Initializing data
      type: null,
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
  created() {
    const searchBy = this.$route.query.by
    if (searchBy === 'location') {
      this.type = 'location'
    } else if (searchBy === 'rating') {
      this.type = 'rating'
    } else if (searchBy === 'keyword') {
      this.type = 'keyword'
    } else {
      this.$router.push({ path: '/' })
    }
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
  },
}
</script>
