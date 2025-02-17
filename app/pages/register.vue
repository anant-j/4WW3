<template>
  <!-- This is the register component -->
  <div class="container mt-3 align-form">
    <h1>Create Account</h1>
    <form class="align-items-center">
      <div v-show="page == 1">
        <div class="row justify-content-center">
          <div class="col-md-3">
            <label for="firstname">First Name</label>
            <input
              id="firstname"
              v-model="firstname"
              type="text"
              class="form-control"
              placeholder="First Name"
              :class="{
                'is-invalid': !validate.firstname && blur,
                'is-valid': validate.firstname && blur,
              }"
            />
            <div class="invalid-feedback">Please enter a first name.</div>
          </div>
          <div class="col-md-3">
            <label for="lastname">Last Name</label>
            <input
              id="lastname"
              v-model="lastname"
              type="text"
              class="form-control"
              placeholder="Last Name"
              :class="{
                'is-invalid': !validate.lastname && blur,
                'is-valid': validate.lastname && blur,
              }"
            />
            <div class="invalid-feedback">Please enter a last name.</div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <label for="email">Email</label>
            <!-- This is the HTML5 email field -->
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Enter Email"
              :class="{
                'is-invalid': !validate.email && blur,
                'is-valid': validate.email && blur,
              }"
            />
            <div class="invalid-feedback">Please enter a valid email.</div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <label for="password">Password</label>
            <!-- This is the HTML5 password field -->
            <input
              id="password"
              v-model="password"
              type="password"
              autoComplete="new-password"
              class="form-control"
              placeholder="Enter Password"
              :class="{
                'is-invalid': !validate.password && blur,
                'is-valid': validate.password && blur,
              }"
            />
            <div class="invalid-feedback">
              Please enter a password that is at least 5 characters long, and
              contains a number, a symbol and a letter.
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <label for="dob">Date of Birth</label>
            <!-- This is the HTML5 date field for selecting user's Date of Birth -->
            <input
              id="dob"
              v-model="dob"
              type="date"
              class="form-control"
              :max="getMaxDate"
              :class="{
                'is-invalid': !validate.dob && blur,
                'is-valid': validate.dob && blur,
              }"
            />
            <div class="invalid-feedback">Please enter a valid DOB</div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <button type="button" class="col-3 btn btn-primary" @click="submit">
            Next
          </button>
        </div>
        <div class="row justify-content-center mt-3">
          <!-- Login button that is only enabled if both email and password fields are empty -->
          <button
            type="button"
            class="col-3 btn btn-outline-info"
            @click="openPage()"
          >
            Go to Login Page
          </button>
        </div>
      </div>
      <div v-show="page == 2">
        <div v-if="searchQueryEnabled" class="row justify-content-center">
          <div class="col-md-6">
            <label>Search Address: </label>
            <input
              v-model="searchQuery"
              class="form-control"
              autocomplete="none"
              list="queryList"
              name="myBrowser"
              :class="{
                'is-invalid': !validate.searchResult && blur,
                'is-valid': validate.searchResult && blur,
              }"
            />
            <datalist id="queryList">
              <option
                v-for="key in Object.keys(queryResults)"
                :key="key"
                :value="key"
              ></option>
            </datalist>
            <div class="invalid-feedback">
              Please select a valid option from the list.
            </div>
          </div>
        </div>
        <div v-else class="row justify-content-center">
          <div class="col-md-3">
            <label for="latitude">Latitude</label>
            <input
              id="latitude"
              v-model="latitude"
              type="number"
              step="any"
              class="form-control"
              :class="{
                'is-invalid': !validate.latitude && blur,
                'is-valid': validate.latitude && blur,
              }"
              placeholder="Enter Latitude"
            />
            <div class="invalid-feedback">Please enter a valid latitude.</div>
          </div>
          <div class="col-md-3">
            <label for="longitude">Longitude</label>
            <input
              id="longitude"
              v-model="longitude"
              type="number"
              step="any"
              class="form-control"
              :class="{
                'is-invalid': !validate.longitude && blur,
                'is-valid': validate.longitude && blur,
              }"
              placeholder="Enter Longitude"
            />
            <div class="invalid-feedback">Please enter a valid longitude.</div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-md-3 mb-3">
            <button
              type="button"
              class="w-100 btn btn-outline-info"
              @click="
                searchQueryEnabled = !searchQueryEnabled
                blur = false
              "
            >
              <span v-if="searchQueryEnabled">I can't find my address</span>
              <span v-else>Use Autofill/Search</span>
            </button>
          </div>
          <div class="col-md-3 mb-3">
            <button
              type="button"
              class="w-100 btn btn-outline-warning"
              @click="useCurrentLocation()"
            >
              Use My Current Location
            </button>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-md-3 mb-3">
            <button
              type="button"
              class="w-100 btn btn-outline-danger"
              @click="
                page = 1
                blur = false
              "
            >
              <span>Go Back</span>
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="w-100 btn btn-primary" @click="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import geolocation from '~/mixins/geolocation.js'
import notification from '~/mixins/notification.js'
import errorFactory from '~/mixins/errorFactory.js'
import {
  validateEmail,
  validatePassword,
  validateDateOfBirth,
  validateLatitude,
  validateLongitude,
} from '~/mixins/validations.js'
export default {
  mixins: [geolocation, notification, errorFactory],
  data() {
    return {
      page: 1,
      email: '', // Data property for the email entered
      password: '', // Data property for the password entered
      firstname: '',
      lastname: '',
      dob: '',
      searchQuery: '',
      searchQueryEnabled: true,
      latitude: '',
      longitude: '',
      queryResults: {},
      blur: false,
    }
  },
  computed: {
    validate() {
      const firstnameValidation = this.firstname.length
      const lastnameValidation = this.lastname.length
      const emailValidation = validateEmail(this.email)
      const passwordValidation = validatePassword(this.password)
      const dobValidation = validateDateOfBirth(this.dob)
      const searchResultValidation = this.queryResults[this.searchQuery]
      const latitudeValidation = validateLatitude(this.latitude)
      const longitudeValidation = validateLongitude(this.longitude)
      // const nameValidation = this.
      return {
        firstname: firstnameValidation,
        lastname: lastnameValidation,
        email: emailValidation,
        password: passwordValidation,
        dob: dobValidation,
        resultPage1:
          firstnameValidation &&
          lastnameValidation &&
          emailValidation &&
          passwordValidation &&
          dobValidation,
        searchResult: searchResultValidation,
        latitude: latitudeValidation,
        longitude: longitudeValidation,
      }
    },
    getMaxDate() {
      // This function is used to limit the DOB to a maximum value of current date/today's date.
      const date = new Date()
      // date.setFullYear(date.getFullYear() - 18);
      return date.toISOString().split('T')[0]
    },
  },
  watch: {
    searchQuery(val) {
      if (val.length >= 3) {
        if (!this.queryResults[val]) {
          this.populateSearchData(val)
        }
      } else {
        this.queryResults = {}
      }
    },
  },
  methods: {
    async useCurrentLocation() {
      this.blur = false
      this.searchQueryEnabled = false
      const location = await this.getLocation()
      if (location.success) {
        this.latitude = location.latitude
        this.longitude = location.longitude
      } else {
        alert("Couldn't get location")
      }
    },
    async populateSearchData(val) {
      const data = await fetch(
        `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${process.env.VUE_APP_HERE_API_KEY}&maxresults=5&query=${val}`
      )
      const result = await data.json()
      this.queryResults = {}
      if (result.suggestions && result.suggestions.length > 0) {
        for (const suggestion of result.suggestions) {
          let suggestionLabel = ''
          if (suggestion.address.houseNumber && suggestion.address.street) {
            suggestionLabel +=
              suggestion.address.houseNumber +
              ' ' +
              suggestion.address.street +
              ', '
          }
          if (suggestion.address.city) {
            suggestionLabel += suggestion.address.city + ', '
          }
          if (suggestion.address.state) {
            suggestionLabel += suggestion.address.state + ', '
          }
          if (suggestion.address.postalCode) {
            suggestionLabel += suggestion.address.postalCode + ', '
          }
          if (suggestion.address.country) {
            suggestionLabel += suggestion.address.country
          }
          this.queryResults[suggestionLabel.toString()] = suggestion.locationId
        }
      }
    },
    openPage() {
      if (this.$route.query.callback) {
        this.$router.push({
          path: 'Login',
          query: { callback: this.$route.query.callback },
        })
      } else {
        this.$router.push({ path: 'Login' })
      }
    },
    async sendResult(latitude, longitude) {
      const response = await this.$api.register(
        this.email,
        this.password,
        this.firstname,
        this.lastname,
        this.dob,
        latitude,
        longitude
      )
      const result = await response.json()
      if (result.success) {
        this.showToast('Successfully registered')
        this.$store.commit('login', result)
        if (this.$route.query.callback) {
          this.$router.push(this.$route.query.callback)
        } else {
          this.$router.push({ path: '/' })
        }
      } else {
      this.showToast(this.errorHandler[result.errorCode].message, this.errorHandler[result.errorCode].severity)
      }
    },
    async submit() {
      if (this.page === 1) {
        this.blur = true
        if (this.validate.resultPage1) {
          this.page = 2
          this.blur = false
        }
        return
      }
      if (this.page === 2) {
        this.blur = true
        if (this.validate.searchResult) {
          const locationId = this.queryResults[this.searchQuery]
          const data = await fetch(
            `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${locationId}&jsonattributes=1&gen=9&apiKey=${process.env.VUE_APP_HERE_API_KEY}`
          )
          const result = await data.json()
          const latitude =
            result.response.view[0].result[0].location.displayPosition.latitude
          const longitude =
            result.response.view[0].result[0].location.displayPosition.longitude
          await this.sendResult(latitude, longitude)
        }
        else if (this.validate.latitude && this.validate.longitude) {
          await this.sendResult(this.latitude, this.longitude)
        }
      }
    },
  },
}
</script>
