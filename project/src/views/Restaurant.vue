<template>
    <div>
    <Map class="mapStyle"/>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
  name: "Search",
  data() {},
  components: {
    Map
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    padding-right:30px;
}

.mapStyle{
    width: 50vw;
    margin: auto;
}
</style>
