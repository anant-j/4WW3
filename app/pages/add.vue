<template>
  <!-- This is the page that is displayed when a user wants to add a restaurant -->
  <div class="container mt-3 align-form">
    <h1>Add a Restaurant</h1>
    <form class="align-items-center addForm" @submit.prevent="submit">
      <!-- The div below takes the name of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="name">Restaurant Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Enter Name"
            required
            oninvalid="this.setCustomValidity('Please enter a valid name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>
      <!-- The div below takes the description/about info of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="description">Restaurant Description</label>
          <textarea
            id="description"
            v-model="description"
            type="text"
            class="form-control"
            placeholder="Enter Description"
            required
            maxlength="250"
            oninvalid="this.setCustomValidity('Please enter a description')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- The div below takes the latitude of the restaurant -->
        <div class="col-md-6 row">
          <div id="addObjectLocationInput" class="col-5">
            <label for="latitude">Latitude</label>
            <input
              id="latitude"
              v-model="latitude"
              type="number"
              class="form-control"
              placeholder="Enter Latitude"
              required
              max="90"
              min="-90"
              step="any"
              oninvalid="this.setCustomValidity('Please enter a valid latitude.')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <!-- The div below takes the longitude of the restaurant -->
          <div class="col-5">
            <label for="longitude">Longitude</label>
            <input
              id="longitude"
              v-model="longitude"
              type="number"
              class="form-control"
              placeholder="Enter Longitude"
              required
              max="180"
              min="-180"
              step="any"
              oninvalid="this.setCustomValidity('Please enter a valid longitude.')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div v-if="!(latitude && longitude)" class="col-1">
            <br />
            <button
              class="btn btn-primary"
              type="button"
              @click="useCurrentLocation()"
            >
              <font-awesome-icon :icon="['fas', 'location-arrow']" />
            </button>
          </div>
          <div v-else class="col-1">
            <br />
            <MapModal
              :latitude="parseFloat(latitude)"
              :longitude="parseFloat(longitude)"
            />
          </div>
        </div>
      </div>
      <!-- The div below takes the website for the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="website">Restaurant's Website</label>
          <input
            id="website"
            v-model="website"
            type="url"
            class="form-control"
            placeholder="Enter Website"
            oninvalid="this.setCustomValidity('Please enter a valid website.')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="website">Restaurant's Phone Number (123-456-7890)</label>
          <input
            id="phone"
            v-model="phone"
            type="tel"
            class="form-control"
            placeholder="Enter Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            oninvalid="this.setCustomValidity('Please enter a valid phone number.')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>
      <!-- The div below allows the user to upload an image of the restaurant -->
      <div class="row justify-content-center mt-3">
        <div class="col-md-6 row">
          <div class="col-10">
            <label for="image">Upload an Image :</label>&nbsp;
            <input
              id="image"
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              @change="processFile($event)"
            />
          </div>
          <div class="col-1">
            <br />
            <ImageModal :url="imageUrl" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button
          type="submit"
          class="col-3 btn btn-primary"
          :disabled="apiCallInProgress"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import geolocation from '~/mixins/geolocation.js'
import notification from '~/mixins/notification.js'
import MapModal from '~/components/MapModal.vue'
import ImageModal from '~/components/ImageModal.vue'
import errorFactory from '~/mixins/errorFactory.js'
export default {
  components: {
    MapModal,
    ImageModal,
  },
  mixins: [geolocation, notification, errorFactory],
  middleware: 'auth',
  data() {
    return {
      name: '',
      description: '',
      latitude: '',
      longitude: '',
      website: '',
      phone: '',
      imageUrl: '',
      imageUpload: null,
      imageB64: null,
      apiCallInProgress: false,
    }
  },
  methods: {
    openPage() {
      this.$router.push({ path: 'Register' }) // Switch view to Register.vue
    },
    async submit() {
      this.apiCallInProgress = true
      const response = await this.$api.addRestaurant(
        this.name,
        this.description,
        this.latitude,
        this.longitude,
        this.website,
        this.phone,
        this.$store.state.user.jwt,
        this.imageB64
      )
      const result = await response.json()
      if (result.success) {
        this.showToast('Restaurant added successfully')
        this.$router.push({ path: 'Restaurant', query: { id: result.id } })
      } else {
        this.showToast(
          this.errorHandler[result.errorCode].message,
          this.errorHandler[result.errorCode].severity
        )
      }
      this.apiCallInProgress = false
    },
    async useCurrentLocation() {
      this.searchQueryEnabled = false
      const location = await this.getLocation()
      if (location.success) {
        this.latitude = location.latitude
        this.longitude = location.longitude
      } else {
        alert("Couldn't get location")
      }
    },
    processFile(event) {
      if (event.target.files.length) {
        this.imageUpload = event.target.files[0]
        this.imageUrl = URL.createObjectURL(this.imageUpload)
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
          this.imageB64 = reader.result
        }
      } else {
        this.imageUpload = null
        this.imageUrl = null
      }
    },
  },
}
</script>
