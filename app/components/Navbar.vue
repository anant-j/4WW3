<template>
  <!-- The component below represents the navbar that is displayed on top of each page -->
  <!-- We use Vue's class binding to assign the respective classes based on the night mode status -->
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    :class="{
      'background-black': $store.state.nightMode,
      'background-dark': !$store.state.nightMode,
    }"
  >
    <div class="container-fluid">
      <!-- Nuxtlink is Nuxt's builtin component that manages routing automatically -->
      <NuxtLink class="navbar-brand" to="/">OuseMouse</NuxtLink>
      <!-- The button below is the hamburger menu toggle that shows up on the top right in mobile device's view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li v-if="$store.state.user.loggedIn" class="nav-item">
            <NuxtLink class="nav-link" to="/Add">Add Restaurant</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/About">About</NuxtLink>
          </li>
        </ul>
        <div class="d-flex">
          <!-- The button below is used to turn the night/dark mode on or off using Vuex mutations-->
          <li v-if="$store.state.user.loggedIn" class="nav-item">
            <a class="nav-link" style="color: white"><span v-if="$store.state.user.firstname">{{$store.state.user.firstname}}</span>
            <span v-if="$store.state.user.lastname">{{$store.state.user.lastname}}</span></a>
          </li>
          <button
            v-if="!$store.state.user.loggedIn"
            class="btn btn-outline-info"
            aria-label="login"
            @click="$router.push('/Login')"
          >
            <span>Login</span>
          </button>
          <button
            v-else
            class="btn btn-outline-danger"
            aria-label="logout"
            @click="$store.commit('logout')"
          >
            <span>Logout</span>
          </button>
          <span>&nbsp; &nbsp;&nbsp;</span>
          <button
            class="btn btn-outline-success"
            aria-label="dark-mode"
            @click="$store.commit('toggleDarkMode')"
          >
            <span v-if="$store.state.nightMode">
              <font-awesome-icon :icon="['fas', 'moon']" />
            </span>
            <span v-else>
              <font-awesome-icon :icon="['far', 'moon']" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
