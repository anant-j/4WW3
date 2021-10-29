export default {
  methods: {
    async getLocation() {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
        return {
          success: true,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }
      } catch (error) {
        return {
          success: false,
        }
      }
    },
    async updateUserLocation(redirect = false) {
      const location = await this.getLocation()
      if (location.success) {
        const payload = {
            latitude: location.latitude,
          longitude: location.longitude,
        }
        this.$store.commit('setUserLocation', payload)
        if (redirect) {
          this.$router.push({
            path: 'Search',
            query: { by: 'location' },
          })
        }
      } else {
        this.$store.commit('userLocationFailed')
      }
    },
  },
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}
