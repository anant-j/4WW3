<template>
  <div class="row">
    <Map class="mapStyle col"/>
    <List class="listStyle col-3"/>
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
    padding:30px;
}
.mapStyle{
  padding: 0px!important;
  margin: 0px!important;
}
listStyle{
  padding: 0px!important;
  margin: 0px!important;  
}
</style>
