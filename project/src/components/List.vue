<template>
  <div class="list-group">
    <a
      v-for="item in listData"
      :key="item.id"
      @click="openPage()"
      class="list-group-item list-group-item-action"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      listData: [
        { id: 1, name: "Osmows", age: 30 },
        { id: 2, name: "Basilique", age: 25 },
        { id: 3, name: "Lazeez", age: 28 },
        { id: 4, name: "Ginos", age: 26 },
      ],
    };
  },
  methods: {
    openPage() {
      this.$router.push({ path: "restaurant" });
    },
  },
};
</script>
