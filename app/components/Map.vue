<template>
  <GmapMap
    ref="mapRef"
    :center="{ lat: coords.lat, lng: coords.lng }"
    :zoom="13"
  >
    <GmapMarker :position="coords" :clickable="true" @click="panCenter()" />
    <GmapMarker
      v-for="(m, index) in focus"
      :key="index"
      :position="m.position"
      :clickable="true"
    />
  </GmapMap>
</template>
<script>
export default {
  computed: {
    coords() {
      return this.$store.state.userLocation
    },
    focus() {
      const final = []
      for (const iterator of this.$store.state.restaurantsInFocus) {
        const data = this.$store.state.restaurants[iterator]
        const tempData = {
          name: data.name,
          id: data.id,
          position: { lat: data.lat, lng: data.lng },
        }
        if(tempData.position.lat && tempData.position.lng){
        final.push(tempData)}
      }
      return final
    },
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
