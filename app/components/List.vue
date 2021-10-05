<template>
  <div class="list-group">
    <a class="list-group-item">
      <b>Results:</b>
    </a>
    <a class="list-group-item list-group-item-action" @click="openPage()"
      >Osmows</a
    >
    <a class="list-group-item list-group-item-action" @click="openPage()"
      >Basilique</a
    >
    <a class="list-group-item list-group-item-action" @click="openPage()"
      >Lazeez</a
    >
    <a class="list-group-item list-group-item-action" @click="openPage()"
      >Ginos</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    openPage() {
      this.$router.push({ path: 'restaurant' })
    },
  },
}
</script>
