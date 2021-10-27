<template>
  <!-- Can also use @idle -->
  <GmapMap
    ref="mapRef"
    :center="{ lat: coords.lat, lng: coords.lng }"
    :zoom="13"
    :options="{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    }"
    @bounds_changed="updateBounds()"
  >
    <GmapMarker :position="coords" :clickable="true" @click="panCenter()" />
    <GmapMarker
      v-for="(m, index) in activePinsOnMap"
      :key="index"
      :position="m.position"
      :clickable="true"
    />
  </GmapMap>
</template>
<script>
export default {
  data() {
    return {
      map: null,
    }
  },
  computed: {
    coords() {
      return this.$store.state.userLocation
    },
    activePinsOnMap() {
      const final = []
      for (const iterator of this.$store.state.restaurantsInFocus) {
        const data = this.$store.state.restaurants[iterator]
        const tempData = {
          name: data.name,
          id: data.id,
          position: { lat: data.lat, lng: data.lng },
        }
        if (tempData.position.lat && tempData.position.lng) {
          final.push(tempData)
        }
      }
      return final
    },
  },
  mounted() {
    if (this.$store.state.userLocation.status === 0) {
      this.getLocation()
    }
    this.$refs.mapRef.$mapPromise.then((map) => {
      this.map = map
    })
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
    updateBounds() {
      const bounds = this.map.getBounds()
      const ne = bounds.getNorthEast()
      const sw = bounds.getSouthWest()
      this.$store.commit('updateMapBounds', {
        northEast: { lat: ne.lat(), lng: ne.lng() },
        southWest: { lat: sw.lat(), lng: sw.lng() },
      })
    },
  },
}
</script>
