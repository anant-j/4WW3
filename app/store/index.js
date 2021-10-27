export const state = () => ({
  nightMode: true,
  userLocation: {
    lat: 43.2607355,
    lng: -79.9192335,
    status: 0,
  },
  mapBounds: {
    northEast: {
      lat: null,
      lng: null,
    },
    southWest: {
      lat: null,
      lng: null,
    },
  },
  restaurants: {
    1011: {
      name: 'Osmows',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: 'Hamilton, Ontario',
      phone: '4167275021',
      website: 'https://mrosmow.com/',
      hours: {
        monday: '11:00 AM - 10:00 PM',
        tuesday: '11:00 AM - 10:00 PM',
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 10:00 PM',
        saturday: '11:00 AM - 10:00 PM',
        sunday: '11:00 AM - 10:00 PM',
      },
      rating: '',
      reviews: [
        {
          title: 'Perfect place for dinner',
          rating: 4,
          review:
            'Amazing restaurant. Had the Philly Veggie Wrap. Be careful as the sauce drips and can get stuck in beard.',
          username: 'Alice Franklin',
          imageurl: 'https://randomuser.me/api/portraits/women/55.jpg',
        },
        {
          title: 'Owner is friedly',
          rating: 5,
          review:
            'He is always serving customers with a smile on his face. He is like a family member.',
          username: 'Logan Craig',
          imageurl: 'https://randomuser.me/api/portraits/men/12.jpg',
        },
      ],
      image:
        'https://dynamicmedia.zuza.com/zz/m/original_/7/2/7266f0c7-32b2-4514-af18-1b9dd948b072/Osmow%20s%2004_Super_Portrait.jpg',
      lat: 43.2584973,
      lng: -79.9454202,
      id: 1011,
    },
    1012: {
      name: 'The Ritz-Carlton',
      about: 'Hotel',
      address: 'Hamilton, Ontario',
      phone: '416-867-5309',
      website: 'https://www.ritzcarlton.com/',
      hours: {
        monday: '11:00 AM - 10:00 PM',
        tuesday: '11:00 AM - 10:00 PM',
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 10:00 PM',
        saturday: '11:00 AM - 10:00 PM',
        sunday: '11:00 AM - 10:00 PM',
      },
      rating: 5,
      reviews: [
        {
          title: 'Perfect place for dinner',
          rating: 4,
          review: 'Amazing',
          username: 'Alice Franklin',
          imageurl: 'https://randomuser.me/api/portraits/women/56.jpg',
        },
      ],
      image: '',
      lat: '',
      lng: '',
      id: 1012,
    },
  },
  restaurantsInFocus: new Set().add(1011),
})

export const mutations = {
  toggleDarkMode(state) {
    state.nightMode = !state.nightMode
  },
  setUserLocation(state, payload) {
    state.userLocation.lat = payload.latitude
    state.userLocation.lng = payload.longitude
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
        lat: payload.northEast.lat,
        lng: payload.northEast.lng,
      },
      southWest: {
        lat: payload.southWest.lat,
        lng: payload.southWest.lng,
      },
    }
  },
}
