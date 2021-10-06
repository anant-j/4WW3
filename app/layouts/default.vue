<template>
  <div class="wrapper background-light text-dark">
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

