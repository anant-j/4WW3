export const state = () => ({
  nightMode: true,
  userLocation: {
    lat: 43.2607355,
    lng: -79.9192335,
    status: 0,
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
      image: 'https://dynamicmedia.zuza.com/zz/m/original_/7/2/7266f0c7-32b2-4514-af18-1b9dd948b072/Osmow%20s%2004_Super_Portrait.jpg',
      lat: 43.2584973,
      lng: -79.9454202,
      id: '1011',
    },
    2013: {
      name: 'Owsmows',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: '',
      phone: '',
      website: '',
      hours: '',
      menu: '',
      price: '',
      rating: '',
      reviews: '',
      image: '',

      id: '2013',
    },
    31: {
      name: 'Pizza Hut',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: '',
      phone: '',
      website: '',
      hours: '',
      menu: '',
      price: '',
      rating: '',
      reviews: '',
      image: '',
      lat: '',
      lng: '',
      id: '31',
    },
    43345: {
      name: 'Basilique',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: '',
      phone: '',
      website: '',
      hours: '',
      menu: '',
      price: '',
      rating: '',
      reviews: '',
      image: '',
      lat: '',
      lng: '',
      id: '43345',
    },
    567574: {
      name: 'Dominos',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: '',
      phone: '',
      website: '',
      hours: '',
      menu: '',
      price: '',
      rating: '',
      reviews: '',
      image: '',
      lat: '',
      lng: '',
      id: '567574',
    },
    54534543: {
      name: 'KFC',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: '',
      phone: '',
      website: '',
      hours: '',
      menu: '',
      price: '',
      rating: '',
      reviews: '',
      image: '',
      lat: '',
      lng: '',
      id: '54534543',
    },
    3: {
      name: 'Ginos',
      about:
        "Osmow's is a fast casual Mediterranean restaurant capturing a truly modern taste while giving customers the luxury of customizing their preferences.",
      address: '',
      phone: '',
      website: '',
      hours: '',
      menu: '',
      price: '',
      rating: '',
      reviews: '',
      image: '',
      lat: '',
      lng: '',
      id: '54534543',
    },
  },
  restaurantsInFocus: [1011],
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
}
