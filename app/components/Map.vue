<template>
  <GmapMap
    v-if="loadingStatus == 1 || loadingStatus == 2"
    ref="mapRef"
    :center="{ lat: coords.lat, lng: coords.lng }"
    :zoom="13"
  >
   <GmapMarker
    :position="coords"
    :clickable="true"
    @click="panCenter()"
  />
  </GmapMap>
  <h1 v-else-if="loadingStatus == 0">Loading Map</h1>
</template>
<script>
export default {
  data() {
    return {
      loadingStatus: 0,
      coords: {
        'lat': 0,
        'lng': 0,
      },
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(this.success, this.error)
  },
  methods: {
    panCenter() {
      this.$refs.mapRef.panTo({ lat: this.coords.lat, lng: this.coords.lng })
    },
    success(pos) {
      const crd = pos.coords
      this.coords.lat = crd.latitude
      this.coords.lng = crd.longitude
      this.loadingStatus = 1
    },
    error() {
      this.loadingStatus = 2
      this.coords.lat = 43.2607355
      this.coords.lng = -79.9192335
    },
  },
}
</script>
