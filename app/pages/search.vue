<template>
  <!-- This is the results page that is displayed after a search has been made -->
  <div class="row container-fluid mt-3">
    <div class="col mb-1 searchMap">
      <!-- Display the map component with results -->
      <Map class="col mb-1 h-100" />
    </div>
    <!-- Display the list component with results -->
    <List class="col-md-3" />
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
  watch: {
    '$store.state.mapBounds' () {
      const restaurants = this.$store.state.restaurants;
      this.$store.commit('clearActiveRestaurants');
      for (const restaurant of Object.keys(restaurants)) {
        if(this.isWithinBounds(restaurants[restaurant].lat, restaurants[restaurant].lng, this.$store.state.mapBounds)) {
          this.$store.commit('addActiveRestaurant', restaurant);
        }
      }  
    },
  },
  methods: {
    // Methods
    isWithinBounds(lat, lng, bounds){
      if(lat < bounds.northEast.lat && lat > bounds.southWest.lat && lng < bounds.northEast.lng && lng > bounds.southWest.lng){
        return true
      }
      return false
    },
  },
}
</script>
