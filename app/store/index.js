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
      latitude: 43.258666,
      longitude: -79.942932,
      id: 1011,
    },
    1012: {
      name: 'Quatrefoil',
      about:
        'Polished, upscale restaurant offering seasonal modern French cuisine, fine wines & a patio.',
      address: 'Hamilton, Ontario',
      phone: '(905) 628-7800',
      website: 'https://quatrefoilrestaurant.com',
      hours: {
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 10:00 PM',
        saturday: '11:00 AM - 10:00 PM',
      },
      rating: '5',
      reviews: [],
      image:
        'https://lh5.googleusercontent.com/p/AF1QipOMeEBWrocRfYVNUEv3vkBIwtKWG9CSgMldHWPR=w408-h271-k-no',
      latitude: 43.2672559,
      longitude: -79.9656398,
      id: 1012,
    },
    1102: {
      name: 'Thirsty Cactus',
      about:
        'No-frills establishment featuring generous plates of Mexican fare, classic comfort grub & cocktails.',
      address: '2 King St E, Dundas, ON L9H 1B8',
      phone: '(905) 627-8488',
      website: 'https://thirstycactus.ca/',
      hours: {
        monday: '11:30 AM - 11:00 PM',
        tuesday: '11:30 AM - 11:00 PM',
        wednesday: '11:30 AM - 11:00 PM',
        thursday: '11:30 AM - 11:00 PM',
        friday: '11:30 AM - 11:00 PM',
        saturday: '11:30 AM - 11:00 PM',
        sunday: '11:30 AM - 11:00 PM',
      },
      rating: '4',
      reviews: [],
      image:
        'https://lh5.googleusercontent.com/p/AF1QipPUS-nbWKcUBUIVuueDEBKETt8wDOJWftreqMH4=w408-h306-k-no',
      latitude: 43.2659452,
      longitude: -79.955817,
      id: 1102,
    },
    1103: {
      name: 'HAMBRGR',
      about: 'Burgers, burgers, burgers',
      address: '49 King William St, Hamilton, ON L8R 1A2',
      phone: '(289) 389-1212',
      website: 'https://hambrgr.ca/',
      hours: {
        monday: '11:00 AM - 10:00 PM',
        tuesday: '11:00 AM - 10:00 PM',
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 10:00 PM',
        saturday: '11:00 AM - 10:00 PM',
        sunday: '11:00 AM - 10:00 PM',
      },
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
      hours: {
        monday: '11:00 AM - 10:00 PM',
        tuesday: '11:00 AM - 10:00 PM',
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 10:00 PM',
        saturday: '11:00 AM - 10:00 PM',
        sunday: '11:00 AM - 10:00 PM',
      },
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
  }
}
