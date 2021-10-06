<template>
  <div class="wrapper">
    <header>
      <Navbar />
    </header>
    <article>
      <Nuxt />
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
}
</script>
