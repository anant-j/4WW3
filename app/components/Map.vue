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
    <GmapMarker :position="coords" :clickable="true" :icon="getCurrentLocationIcon()" @click="panCenter()" />
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
    getCurrentLocationIcon(){
      const icon = {
          path: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
          fillColor: 'blue',
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 0.025,
        }
        return icon
    },
    getIconColour(id) {
      if (this.$store.state.highlighted === id) {
        const icon = {
          path: 'M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z',
          fillColor: 'red',
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 0.06,
        }
        return icon
        // return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      }
      const icon = {
        path: 'M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z',
        fillColor: 'orange',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.05,
      }
      return icon
      // return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
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
