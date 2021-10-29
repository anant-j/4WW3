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
                'is-invalid': !validate().firstname && blur,
                'is-valid': validate().firstname && blur,
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
                'is-invalid': !validate().lastname && blur,
                'is-valid': validate().lastname && blur,
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
                'is-invalid': !validate().email && blur,
                'is-valid': validate().email && blur,
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
              class="form-control"
              placeholder="Enter Password"
              :class="{
                'is-invalid': !validate().password && blur,
                'is-valid': validate().password && blur,
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
              :max="getMaxDate()"
              :class="{
                'is-invalid': !validate().dob && blur,
                'is-valid': validate().dob && blur,
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
            :disabled="email != '' || password != ''"
            @click="openPage()"
          >
            Go to Login Page
          </button>
        </div>
      </div>
      <div v-show="page == 2">
        <div v-if="searchQueryEnabled" class="row justify-content-center">
          <div class="col-md-6">
            <label for="loationSearch">Search Address</label>
            <!-- This is the HTML5 email field -->
            <input
              id="loationSearch"
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Start typing to auto fill address"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <label for="street">Street</label>
            <!-- This is the HTML5 email field -->
            <input
              id="street"
              v-model="street"
              type="text"
              class="form-control"
              placeholder="Street"
              :disabled="searchQueryEnabled"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-3">
            <label for="city">City</label>
            <input
              id="city"
              v-model="city"
              type="text"
              class="form-control"
              placeholder="City"
              :disabled="searchQueryEnabled"
            />
          </div>
          <div class="col-md-3">
            <label for="state">State</label>
            <input
              id="state"
              v-model="state"
              type="text"
              class="form-control"
              placeholder="State"
              :disabled="searchQueryEnabled"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-3">
            <label for="postalcode">Postal Code</label>
            <input
              id="postalcode"
              v-model="postalCode"
              type="text"
              class="form-control"
              placeholder="Postal Code"
              :disabled="searchQueryEnabled"
            />
          </div>
          <div class="col-md-3">
            <label for="country">Country</label>
            <input
              id="country"
              v-model="country"
              type="text"
              class="form-control"
              placeholder="Country"
              :disabled="searchQueryEnabled"
            />
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-md-3 mb-3">
          <button
            type="button"
            class="w-100 btn btn-outline-info"
            @click="searchQueryEnabled = !searchQueryEnabled"
          >
            <span v-if="searchQueryEnabled">Edit Manually</span>
            <span v-else>Use Autofill/Search</span>
          </button>
          </div>
          <div class="col-md-3 mb-3">
             <button
            type="button"
            class="w-100 btn btn-outline-warning"
            :disabled="searchQuery.length!=0 && searchQueryEnabled"
          >Use Current Location</button>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-md-3 mb-3">
          <button
            type="button"
            class="w-100 btn btn-outline-danger"
            @click="page = 1"
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
export default {
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
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      blur: false,
    }
  },
  watch: {
    searchQuery(val) {
      if (val.length >= 3) {
        this.populateSearchData(val)
      }
      else{
        this.street = ''
        this.city = ''
        this.state = ''
        this.postalCode = ''
        this.country = ''
      }
    },
  },
  methods: {
    async populateSearchData(val) {
      const data = await fetch(
        `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${process.env.VUE_APP_HERE_API_KEY}&maxresults=1&query=${val}`
      )
      const result = await data.json()
      if (result.suggestions && result.suggestions.length > 0) {
        if (
          result.suggestions[0].address.houseNumber &&
          result.suggestions[0].address.street
        ) {
          this.street =
            result.suggestions[0].address.houseNumber +
            ' ' +
            result.suggestions[0].address.street
        } else {
          this.street = ''
        }
        this.city = result.suggestions[0].address.city
          ? result.suggestions[0].address.city
          : ''
        this.state = result.suggestions[0].address.state
          ? result.suggestions[0].address.state
          : ''
        this.postalCode = result.suggestions[0].address.postalCode
          ? result.suggestions[0].address.postalCode
          : ''
        this.country = result.suggestions[0].address.country
          ? result.suggestions[0].address.country
          : ''
      } else {
        this.street = ''
        this.city = ''
        this.state = ''
        this.postalCode = ''
        this.country = ''
      }
    },
    getMaxDate() {
      // This function is used to limit the DOB to a maximum value of current date/today's date.
      const date = new Date()
      // date.setFullYear(date.getFullYear() - 18);
      return date.toISOString().split('T')[0]
    },
    openPage() {
      this.$router.push({ path: 'Login' }) // Switch view to Login.vue
    },
    submit() {
      this.blur = true
      if (this.validate().result) {
        alert('Done')
      } else {
        alert('Not Done')
      }
      if (this.page === 1) {
        this.page = 2
      }
    },
    validate() {
      const firstnameValidation = this.firstname.length
      const lastnameValidation = this.lastname.length
      const emailValidation = this.email.length
      const passwordValidation = this.password.length >= 5
      const dobValidation = ''
      // const nameValidation = this.
      return {
        firstname: firstnameValidation,
        lastname: lastnameValidation,
        email: emailValidation,
        password: passwordValidation,
        dob: dobValidation,
        result:
          firstnameValidation &&
          lastnameValidation &&
          emailValidation &&
          passwordValidation &&
          dobValidation,
      }
    },
  },
}
</script>
