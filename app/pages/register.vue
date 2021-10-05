<template>
  <div class="container mt-3 submitObject">
    <h1>Create Account</h1>
    <form class="align-items-center">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <label for="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            class="form-control"
            placeholder="First Name"
          />
        </div>
        <div class="col-md-3">
          <label for="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            class="form-control"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="email">Email</label>
          <input
            id="description"
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter Email"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="password">Password</label>
          <input
            id="description"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter Password"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="dob">Date of Birth</label>
          <input
            id="dob"
            type="date"
            class="form-control"
            :max="getMaxDate()"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-6 col-md-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Location</option>
            <option value="1">Hamilton</option>
            <option value="2">Toronto</option>
            <option value="3">Ancaster</option>
            <option value="3">Vancouver</option>
          </select>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="form-check">
            <input
              id="flexCheckChecked"
              class="form-check-input"
              type="checkbox"
              value
              checked
            />
            <label class="form-check-label" for="flexCheckChecked"
              >Remember My Location</label
            >
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary">Submit</button>
      </div>
      <div
        v-if="email == '' && password == ''"
        class="row justify-content-center mt-3"
      >
        <button type="button" class="col-3 btn" @click="openPage()">
          Login Page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    getMaxDate() {
      const date = new Date()
      // date.setFullYear(date.getFullYear() - 18);
      return date.toISOString().split('T')[0]
    },
    openPage() {
      this.$router.push({ path: 'login' })
    },
  },
}
</script>
