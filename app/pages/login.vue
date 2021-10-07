<template>
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
      email: '',
      password: '',
    }
  },
  methods: {
    openPage() {
      this.$router.push({ path: 'register' })
    },
  },
}
</script>
