<template>
  <!-- This is the results page that is displayed after a search has been made -->
  <div class="row container-fluid mt-3">
    <!-- Display the map component with results -->
    <Map class="col mb-1" />
    <!-- Display the list component with results -->
    <List class="col-md-3" />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Map from "@/components/Map.vue";
export default {
  components: {
    // Registering components
    List,
    Map,
  },
};
</script>
