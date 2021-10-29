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
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            :class="{
              'is-invalid': !validate().password && blur,
              'is-valid': validate().password && blur,
            }"
            placeholder="Enter Password"
          />
          <div class="invalid-feedback">
            Please enter a password that is at least 5 characters long, and
            contains a number, a symbol and a letter.
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary" @click="submit()">Login</button>
      </div>
      <div class="row justify-content-center mt-3">
        <!-- Register button that is only enabled if both email and password fields are empty -->
        <button
          type="button"
          class="col-3 btn btn-danger"
          :disabled="email != '' || password != ''"
          @click="openPage()"
        >Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import validations from "~/mixins/validations.js";
export default {
  mixins: [validations],
  data() {
    return {
      email: "", // Data property for the email entered
      password: "", // Data property for the password entered
      blur: false,
    };
  },
  methods: {
    openPage() {
      this.$router.push({ path: "register" }); // Switch view to Register.vue
    },
    submit() {
      this.blur = true;
      if (this.validate().result) {
        alert("Done");
      } else {
        alert("Not Done");
      }
    },
    validate() {
      const emailValidation = this.validateEmail(this.email);
      const passwordValidation = this.validatePassword(this.password);
      return {
        email: emailValidation,
        password: passwordValidation,
        result: emailValidation && passwordValidation,
      };
    },
  },
};
</script>
