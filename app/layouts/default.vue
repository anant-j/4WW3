<template>
  <!-- The div below is the outermost view of the application -->
  <!-- We use Vue's class binding to assign the respective classes based on the night mode status -->
  <div
    class="wrapper"
    :class="{
      'background-light': !$store.state.nightMode,
      'text-dark': !$store.state.nightMode,
      'background-dark': $store.state.nightMode,
      'text-light': $store.state.nightMode,
    }"
  >
    <header>
      <!-- Here, we are importing the Navbar component, which will always persist above all views -->
      <Navbar />
    </header>
    <article>
      <!-- Added a transistion frame which plays an out-in fade transistion every time Nuxt view changes-->
      <transition name="fade">
        <!-- The view (different components under app/pages) will be rendered inside the div below based on the selection from NuxtLink in Navbar or other components-->
        <Nuxt />
      </transition>
    </article>
    <footer>
      <!-- Here, we are importing the Navbar component, which will always persist below all views -->
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer }, // Registering components
  transition: 'fade', // Registering transistion
}
</script>
