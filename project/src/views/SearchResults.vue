<template>
  <div class="row">
    <Map class="mapStyle col"/>
    <List class="listStyle col"/>
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
    Map
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    padding-right:30px;
}
</style>
