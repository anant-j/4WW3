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
          <input
            id="password"
            v-model="password"
            type="password"
            autoComplete="current-password"
            class="form-control"
            :class="{
              'is-invalid': !validate.password && blur,
              'is-valid': validate.password && blur,
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
        <button
          type="button"
          class="col-3 btn btn-primary"
          :disabled="apiCallInProgress"
          @click="submit()"
        >
          <span v-if="!apiCallInProgress">Login</span>
          <span v-else>Please wait...</span>
        </button>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-danger" @click="openPage()">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import notification from '~/mixins/notification.js'
import { validateEmail, validatePassword } from '~/mixins/validations.js'
export default {
  mixins: [notification],
  data() {
    return {
      email: '', // Data property for the email entered
      password: '', // Data property for the password entered
      blur: false,
      toast: null,
      apiCallInProgress: false,
    }
  },
  computed: {
    validate() {
      const emailValidation = validateEmail(this.email)
      const passwordValidation = validatePassword(this.password)
      return {
        email: emailValidation,
        password: passwordValidation,
        result: emailValidation && passwordValidation,
      }
    },
  },
  methods: {
    openPage() {
      if (this.$route.query.callback) {
        this.$router.push({
          path: 'Register',
          query: { callback: this.$route.query.callback },
        })
      } else {
        this.$router.push({ path: 'Register' }) // Switch view to Register.vue
      }
    },
    async submit() {
      this.blur = true
      this.apiCallInProgress = true
      if (this.validate.result) {
        const response = await this.$api.login(this.email, this.password)
        const result = await response.json()
        if (result.success) {
          this.showToast('Logged In')
          this.$store.commit('login', result)
          if (this.$route.query.callback) {
            this.$router.push(this.$route.query.callback)
          } else {
            this.$router.push({ path: '/' })
          }
        } else if (!result.success) {
          if (result.errorCode === 'emailNotFound') {
            this.showToast('Email not found. Please register first', 'error')
          } else if (result.errorCode === 'passwordIncorrect') {
            this.showToast(
              'The password you’ve entered is incorrect. Please try again.',
              'error'
            )
          } else {
            this.showToast('An error has occurred. Please try again.', 'error')
          }
        }
      } else {
        this.showToast('Please fix listed errors and try again.', 'error')
      }
      this.apiCallInProgress = false
    },
  },
}
</script>
