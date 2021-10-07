<template>
  <div>
    <h2
      :class="{'text-light': $store.state.nightMode, 'text-dark': !$store.state.nightMode}"
    >Results:</h2>
    <ul
      class="resultsList"
      :class="{'resultsListDark': $store.state.nightMode, 'resultsListLight': !$store.state.nightMode}"
    >
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Lazeez</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Osmows</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Ginos</li>
      <li class="list-group-item list-group-item-action" @click="openPage()">Basilique</li>
    </ul>
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
