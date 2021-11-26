import { storeToken, clearStore } from "../mixins/localStore"

export const state = () => ({
  nightMode: true,
  userLocation: {
    latitude: 43.2607355,
    longitude: -79.9192335,
    status: 0,
  },
  mapBounds: {
    northEast: {
      latitude: null,
      longitude: null,
    },
    southWest: {
      latitude: null,
      longitude: null,
    },
  },
  restaurants: {},
  restaurantsInFocus: new Set(),
  highlighted: null,
  centerMapBool: false,
  user: {
    loggedIn: false,
    email: null,
    firstname: null,
    lastname: null,
    latitude: null,
    longitude: null,
    jwt: null,
  },
})

export const mutations = {
  toggleDarkMode(state) {
    state.nightMode = !state.nightMode
  },
  setUserLocation(state, payload) {
    state.userLocation.latitude = payload.latitude
    state.userLocation.longitude = payload.longitude
    state.userLocation.status = 1
  },
  userLocationFailed(state) {
    state.userLocation.status = 2
  },
  addActiveRestaurant(state, id) {
    state.restaurantsInFocus.add(id)
  },
  clearActiveRestaurants(state) {
    state.restaurantsInFocus = new Set()
  },
  setActiveRestaurant(state, id) {
    state.restaurantsInFocus = new Set().add(id)
  },
  updateMapBounds(state, payload) {
    state.mapBounds = {
      northEast: {
        latitude: payload.northEast.latitude,
        longitude: payload.northEast.longitude,
      },
      southWest: {
        latitude: payload.southWest.latitude,
        longitude: payload.southWest.longitude,
      },
    }
  },
  highlight(state, id) {
    state.highlighted = id
  },
  deHighlight(state) {
    state.highlighted = null
  },
  login(state, payload) {
    state.user.loggedIn = true
    state.user.email = payload.user.email
    state.user.firstname = payload.user.firstName
    state.user.lastname = payload.user.lastName
    state.user.dob = payload.user.dob
    state.user.latitude = payload.user.latitude
    state.user.longitude = payload.user.longitude
    state.user.jwt = payload.JWT
    storeToken(payload.JWT, payload.user.email)
  },
  logout(state) {
    state.user.loggedIn = false
    state.user.email = null
    state.user.firstname = null
    state.user.lastname = null
    state.user.dob = null
    state.user.latitude = null
    state.user.longitude = null
    state.user.jwt = null
    clearStore();
  },
  addRestaurant(state, payload) {
    state.restaurants[payload.ID] = {}
    state.restaurants[payload.ID].name = payload.Name
    state.restaurants[payload.ID].about = payload.About
    state.restaurants[payload.ID].phone = payload.Phone
    state.restaurants[payload.ID].website = payload.Website
    state.restaurants[payload.ID].image = payload.Image
    state.restaurants[payload.ID].latitude = parseFloat(payload.Latitude)
    state.restaurants[payload.ID].longitude = parseFloat(payload.Longitude)
    state.restaurants[payload.ID].id = payload.ID
  },
  centerMap(state, payload = true) {
    state.centerMapBool = payload;
  }
}
