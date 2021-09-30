<template>
  <div class="row">
    <Map id="resultMap" class="col" />
    <List id="resultList" class="col-3" />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Map from "@/components/Map.vue";
export default {
  name: "Search",
  data() {},
  components: {
    List,
    Map,
  },
};
</script>
