<template>
  <!-- This is the register component -->
  <div class="container mt-3 align-form">
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
          <!-- This is the HTML5 email field -->
          <input
            id="email"
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
          <!-- This is the HTML5 password field -->
          <input
            id="password"
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
          <!-- This is the HTML5 date field for selecting user's Date of Birth -->
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
          <!-- This is the dropdown field for selecting user's location -->
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
            <!-- This is the checkbox field for remembering user's location -->
            <input
              id="rememberLocation"
              class="form-check-input"
              type="checkbox"
              value
              checked
            />
            <label class="form-check-label" for="rememberLocation"
              >Remember My Location</label
            >
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary">Submit</button>
      </div>
      <div class="row justify-content-center mt-3">
        <!-- Login button that is only enabled if both email and password fields are empty -->
        <button
          type="button"
          class="col-3 btn btn-outline-info"
          :disabled="email != '' || password != ''"
          @click="openPage()"
        >
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
      email: "", // Data property for the email entered
      password: "", // Data property for the password entered
    };
  },
  methods: {
    getMaxDate() {
      // This function is used to limit the DOB to a maximum value of current date/today's date.
      const date = new Date();
      // date.setFullYear(date.getFullYear() - 18);
      return date.toISOString().split("T")[0];
    },
    openPage() {
      this.$router.push({ path: "login" }); // Switch view to Login.vue
    },
  },
};
</script>
