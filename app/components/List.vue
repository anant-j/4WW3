<template>
  <!-- The div below represents the list that is displayed in the search results page after a search has been made -->
  <!-- We use Vue's class binding to assign the respective classes based on the night mode status -->
  <div v-if="activePinsOnMap.length">
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
      <li
        v-for="item in activePinsOnMap"
        :key="item.id"
        class="list-group-item list-group-item-action"
        :class="{ highlighted: item.id == $store.state.highlighted }"
        @click="openPage(item.id)"
        @mouseenter="highlight(item.id)"
        @mouseleave="deHighlight()"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <div v-else>
    <h2
      :class="{
        'text-light': $store.state.nightMode,
        'text-dark': !$store.state.nightMode,
      }"
    >
      No results found
    </h2>
  </div>
</template>

<script>
import mapControl from '~/mixins/mapControl.js'
export default {
  mixins: [mapControl],
  methods: {
    openPage(restaurantId) {
      this.$router.push({ path: 'Restaurant', query: { id: restaurantId } })
    }
  },
}
</script>
