export default {
  methods: {
    highlight(id) {
      this.$store.commit('highlight', id)
    },
    deHighlight() {
      this.$store.commit('deHighlight')
    },
  },
  computed:{
    activePinsOnMap() {
      const final = []
      for (const iterator of this.$store.state.restaurantsInFocus) {
        const data = this.$store.state.restaurants[iterator]
        if (data.latitude && data.longitude) {
          const tempData = {
            name: data.name,
            id: data.id,
            position: { lat: data.latitude, lng: data.longitude },
          }
          final.push(tempData)
        }
      }
      return final
    },
  }
}
