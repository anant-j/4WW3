<template>
  <!-- The div below represents the footer that is used throughout the website -->
  <!-- We use Vue's class binding to assign the respective classes based on the night mode status -->
  <div
    class="container-fluid text-light"
    :class="{
      'background-black': $store.state.nightMode,
      'background-dark': !$store.state.nightMode,
    }"
  >
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-2"
    >
      <div class="col-md-4 d-flex align-items-center">
        <span> © 2021 OuseMouse Inc (4WW3)</span>
      </div>
      All rights reserved. Developed by Anant Jain and Kuber Khanna.
    </footer>
  </div>
</template>
