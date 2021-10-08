<template>
  <div>
    <div class="row">
      <img
        class="col-3 col-md-2 user-image"
        :src="imageurl"
        :alt="username"
        loading="lazy"
      />
      <div class="col-9 col-md-10">
        <h4>{{ title }}</h4>
        <span v-for="star in parseInt(rating)" :key="star">⭐</span>
        <br />
        <p>{{ username }}</p>
      </div>
    </div>
    <br />
    <p>
      {{ review }}
    </p>
    <hr />
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
}
</script>
