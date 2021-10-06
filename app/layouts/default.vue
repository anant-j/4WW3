<template>
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
      <Navbar />
    </header>
    <article>
      <transition name="fade">
        <Nuxt />
      </transition>
    </article>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer },
  transition: 'fade',
}
</script>

