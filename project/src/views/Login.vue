<template>
  <div class="container mt-3 submitObject">
    <h1>Login</h1>
    <form class="align-items-center">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="description">Email</label>
          <input v-model="email" type="email" id="description" class="form-control" placeholder="Enter Email" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="Password">Password</label>
          <input v-model="password" type="password" id="description" class="form-control" placeholder="Enter Password" />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary">Login</button>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-danger" @click="openPage()" :disabled="email!='' || password!=''">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password:"",
    };
  },
  methods: {
    openPage() {
      this.$router.push({ path: "register" });
    }
  }
};
</script>
