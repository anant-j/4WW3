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
          <div id="addObjectLocationInput" class="col">
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
          <div class="col">
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
          <div class="col-1">
            <br />
            <button
              class="btn btn-primary"
              type="button"
              @click="useCurrentLocation()"
            >
              <font-awesome-icon :icon="['fas', 'location-arrow']" />
            </button>
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
      <!-- The div below allows the user to upload an image of the restaurant -->
      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <label for="image">Upload an Image :</label>&nbsp;
          <input
            id="image"
            type="file"
            name="image"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <!-- The div below allows the user to upload a video of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="video">Upload a Video &nbsp;&nbsp;&nbsp;:</label>&nbsp;
          <input id="video" type="file" name="video" accept="video/*" />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="submit" class="col-3 btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import validations from '~/mixins/validations.js'
import geolocation from '~/mixins/geolocation.js'
export default {
  mixins: [validations, geolocation],
  middleware: 'auth',
  data() {
    return {
      name: '',
      description: '',
      latitude: '',
      longitude: '',
      website: '',
      blur: false,
    }
  },
  methods: {
    openPage() {
      this.$router.push({ path: 'Register' }) // Switch view to Register.vue
    },
    async submit() {
      const response = await this.$api.addRestaurant(
        this.name,
        this.description,
        this.latitude,
        this.longitude,
        this.website,
        this.$store.state.user.jwt
      )
      const result = await response.json()
      console.log(result)
    },
    async useCurrentLocation() {
      this.blur = true
      this.searchQueryEnabled = false
      const location = await this.getLocation()
      if (location.success) {
        this.latitude = location.latitude
        this.longitude = location.longitude
      } else {
        alert("Couldn't get location")
      }
    },
  },
}
</script>
