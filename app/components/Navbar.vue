<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">OuseMouse</a>
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
        <ul class="navbar-nav">
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
      </div>
    </div>
  </nav>
</template>