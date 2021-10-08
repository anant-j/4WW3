<template>
  <!-- This is the login component -->
  <div class="container mt-3 align-form">
    <h1>Login</h1>
    <form class="align-items-center">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="email">Email</label>
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
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter Password"
          />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary">Login</button>
      </div>
      <div class="row justify-content-center mt-3">
        <!-- Register button that is only enabled if both email and password fields are empty -->
        <button
          type="button"
          class="col-3 btn btn-danger"
          :disabled="email != '' || password != ''"
          @click="openPage()"
        >
          Register
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
    openPage() {
      this.$router.push({ path: "register" }); // Switch view to Register.vue
    },
  },
};
</script>
