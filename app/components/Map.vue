<template>
  <GmapMap
    v-if="loadingStatus == 1 || loadingStatus == 2"
    :center="{ lat: coords.latitude, lng: coords.longitude }"
    :zoom="13"
  />
  <h1 v-else-if="loadingStatus == 0">Loading Map</h1>
</template>
<script>
export default {
  data() {
    return {
      loadingStatus: 0,
      coords: {
        latitude: 0,
        longitude: 0,
      },
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(this.success, this.error)
  },
  methods: {
    success(pos) {
      const crd = pos.coords
      this.coords.latitude = crd.latitude
      this.coords.longitude = crd.longitude
      this.loadingStatus = 1
    },
    error() {
      this.loadingStatus = 2
      this.coords.latitude = 43.2607355
      this.coords.longitude = -79.9192335
    },
  },
}
</script>
