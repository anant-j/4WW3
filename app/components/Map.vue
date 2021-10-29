<template>
  <!-- Can also use @idle or @bounds_changed -->
  <GmapMap
    ref="mapRef"
    :center="coords"
    :zoom="10"
    :options="{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      maxZoom: 18,
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
import geolocation from '~/mixins/geolocation.js'
import mapControl from '~/mixins/mapControl.js'
export default {
  mixins: [geolocation, mapControl],
  data() {
    return {
      map: null,
    }
  },
  computed: {
    coords() {
      return {
        lat: this.$store.state.userLocation.latitude,
        lng: this.$store.state.userLocation.longitude,
      }
    },
  },
  mounted() {
    if (this.$store.state.userLocation.status === 0) {
      this.updateUserLocation()
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
    panCenter() {
      this.$refs.mapRef.panTo(this.coords)
    },
    recenterBounds() {
      const bounds = new window.google.maps.LatLngBounds()
      for (const pin of this.activePinsOnMap) {
        bounds.extend(new window.google.maps.LatLng(pin.position.lat, pin.position.lng))
      }
      bounds.extend(new window.google.maps.LatLng(this.coords.lat, this.coords.lng))
      this.map.fitBounds(bounds)
    },
    updateBounds() {
      const bounds = this.map.getBounds()
      const ne = bounds.getNorthEast()
      const sw = bounds.getSouthWest()
      this.$store.commit('updateMapBounds', {
        northEast: { latitude: ne.lat(), longitude: ne.lng() },
        southWest: { latitude: sw.lat(), longitude: sw.lng() },
      })
    },
  },
}
</script>
