<template>
  <!-- The div below represents the list that is displayed in the search results page after a search has been made -->
  <!-- We use Vue's class binding to assign the respective classes based on the night mode status -->
  <div>
    <h2
      :class="{
        'text-light': $store.state.nightMode,
        'text-dark': !$store.state.nightMode,
      }"
    >
      Results:
    </h2>
    <ul
      class="results-list"
      :class="{
        'results-list-dark': $store.state.nightMode,
        'results-list-light': !$store.state.nightMode,
      }"
    >
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Lazeez
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Osmows
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Ginos
      </li>
      <li class="list-group-item list-group-item-action" @click="openPage()">
        Basilique
      </li>
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
