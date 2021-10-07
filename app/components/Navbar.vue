<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    :class="{
      'background-black': $store.state.nightMode,
      'background-dark': !$store.state.nightMode,
    }"
  >
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">OuseMouse</NuxtLink>
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
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/Add">Add Restaurant</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/Login">Login</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/About">About</NuxtLink>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-outline-success" @click="$store.commit('toggleDarkMode')">
            <span v-if="$store.state.nightMode">
             <font-awesome-icon :icon="['fas', 'moon']"/>
            </span>
            <span v-else>
                       <font-awesome-icon :icon="['far', 'moon']"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>