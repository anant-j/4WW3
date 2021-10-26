<template>
  <GmapMap
    ref="mapRef"
    :center="{ lat: coords.lat, lng: coords.lng }"
    :zoom="13"
  >
    <GmapMarker :position="coords" :clickable="true" @click="panCenter()" />
  </GmapMap>
</template>
<script>
export default {
  computed:{
    coords(){
      return this.$store.state.userLocation;
    }
  },
  mounted() {
    if (this.$store.state.userLocation.status === 0) {
      this.getLocation()
    }
  },
  methods: {
    panCenter() {
      this.$refs.mapRef.panTo({ lat: this.coords.lat, lng: this.coords.lng })
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        this.getLocationSuccess,
        this.getLocationError
      )
    },
    getLocationSuccess(pos) {
      const payload = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }
      this.$store.commit('setUserLocation', payload)
    },
    getLocationError() {
      this.$store.commit('userLocationFailed')
    },
  },
}
</script>
