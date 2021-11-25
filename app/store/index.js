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
  restaurants: {
    1103: {
      name: 'HAMBRGR',
      about: 'Burgers, burgers, burgers',
      address: '49 King William St, Hamilton, ON L8R 1A2',
      phone: '(289) 389-1212',
      website: 'https://hambrgr.ca/',
      rating: '4',
      reviews: [],
      image:
        'https://s3-media0.fl.yelpcdn.com/bphoto/DkVWVakp7cCgRm8OsC5IDw/l.jpg',
      latitude: 43.2572222,
      longitude: -79.8691331,
      id: 1103,
    },
    1104: {
      name: 'The Yonge St Warehouse',
      about:
        'A casual, family-friendly restaurant serving a variety of traditional and contemporary cuisines.',
      address: '336 Yonge St, Toronto, ON M5B 1R8',
      phone: '(416) 599-5788',
      website: 'http://www.warehousegroup.ca/yonge-street-warehouse/',
      rating: '5',
      reviews: [],
      image:
        'https://media.blogto.com/uploads/2018/02/21/20180216-2048-YongeWarehouse10.jpg?cmd=resize&quality=70&w=1400&height=2500',
      latitude: 43.657502,
      longitude: -79.3838113,
      id: 1104,
    },
  },
  restaurantsInFocus: new Set()
    .add(1011)
    .add(1012)
    .add(1102)
    .add(1103)
    .add(1104),
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
