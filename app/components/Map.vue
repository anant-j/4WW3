<template>
  <!-- Can also use @idle or @bounds_changed -->
  <GmapMap
    ref="mapRef"
    :center="coords"
    :zoom="13"
    :options="{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      maxZoom: 18,
      minZoom: 4,
      clickableIcons: false,
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
      @click="openInfoWindow(m.id)"
    />
    <gmap-info-window
      :options="{
        maxWidth: 300,
        pixelOffset: { width: 0, height: -35 },
      }"
      :position="infoWindowData.position"
      :opened="infoWindow.open"
      @closeclick="closeInfoWindow()"
    >
      <div class="infoWindow">
        <h4>{{ infoWindowData.name }}</h4>
        <p>{{ infoWindowData.about }}</p>
        <button class="btn btn-primary btn-sm" @click="openPage(infoWindow.id)">
          View more details
        </button>
      </div>
    </gmap-info-window>
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
      infoWindow: {
        open: false,
        id: null,
      },
    }
  },
  computed: {
    coords() {
      return {
        lat: this.$store.state.userLocation.latitude,
        lng: this.$store.state.userLocation.longitude,
      }
    },
    infoWindowData() {
      const res = {
        name: '',
        about: '',
        link: '',
        position: { lat: 0, lng: 0 },
      }
      if (this.infoWindow.id) {
        const data = this.$store.state.restaurants[this.infoWindow.id]
        res.name = data.name
        res.about = data.about
        res.position = { lat: data.latitude, lng: data.longitude }
        res.link = 'Test'
      }
      return res
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
    openPage(restaurantId) {
      this.$router.push({ path: 'Restaurant', query: { id: restaurantId } })
    },
    openInfoWindow(id) {
      this.infoWindow.id = id
      this.infoWindow.open = true
    },
    closeInfoWindow() {
      this.infoWindow.open = false
      this.infoWindow.id = null
    },
    getIconColour(id) {
      if (this.$store.state.highlighted === id) {
        return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      }
      return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    },
    panCenter() {
      this.map.panTo(this.coords)
      this.map.setZoom(15)
    },
    recenterBounds() {
      const bounds = new window.google.maps.LatLngBounds()
      for (const pin of this.activePinsOnMap) {
        bounds.extend(
          new window.google.maps.LatLng(pin.position.lat, pin.position.lng)
        )
      }
      bounds.extend(
        new window.google.maps.LatLng(this.coords.lat, this.coords.lng)
      )
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
