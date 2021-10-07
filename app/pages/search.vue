<template>
  <div class="row container-fluid mt-3 align-form">
    <Map class="col mb-1" />
    <List class="col-md-3" />
  </div>
</template>

<script>
import List from '@/components/List.vue'
import Map from '@/components/Map.vue'
export default {
  components: {
    List,
    Map,
  },
}
</script>
