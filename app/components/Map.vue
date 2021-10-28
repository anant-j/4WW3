<template>
  <!-- Can also use @idle or @bounds_changed -->
  <GmapMap
    ref="mapRef"
    :center="{ lat: coords.lat, lng: coords.lng }"
    :zoom="10"
    :options="{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      maxZoom: 14,
      minZoom: 4,
    }"
    @bounds_changed="updateBounds()"
  >
    <GmapMarker :position="coords" :clickable="true" @click="panCenter()" />
    <GmapMarker
      v-for="(m, index) in activePinsOnMap"
      :key="index"
      :position="m.position"
      :clickable="true"
      :icon="getIconColour(m.id)"
      @mouseover="highlight(m.id)"
      @mouseout="deHighlight()"
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
    getIconColour(id) {
      if (this.$store.state.highlighted === id) {
        return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      }
      return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    },
    highlight(id) {
      this.$store.commit('highlight', id)
    },
    deHighlight() {
      this.$store.commit('deHighlight')
    },
    panCenter() {
      this.$refs.mapRef.panTo({ lat: this.coords.lat, lng: this.coords.lng })
      this.map.setZoom(10)
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
