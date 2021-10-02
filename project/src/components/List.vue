<template>
  <div class="list-group">
    <a class="list-group-item">
      <b>Results:</b>
    </a>
    <a @click="openPage()" class="list-group-item list-group-item-action">Osmows</a>
    <a @click="openPage()" class="list-group-item list-group-item-action">Basilique</a>
    <a @click="openPage()" class="list-group-item list-group-item-action">Lazeez</a>
    <a @click="openPage()" class="list-group-item list-group-item-action">Ginos</a>
  </div>
</template>

<script>
export default {
  methods: {
    openPage() {
      this.$router.push({ path: "restaurant" });
    }
  }
};
</script>
