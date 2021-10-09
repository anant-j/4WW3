<template>
  <!-- The component below is used to display a user's review -->
  <div>
    <div class="row">
      <!-- User's image  -->
      <img
        class="col-3 col-md-2 user-image"
        :src="imageurl"
        :alt="username"
        height="100"
        width="50"
        loading="lazy"
      />
      <!-- Review Title -->
      <div class="col-9 col-md-10">
        <h4>{{ title }}</h4>
        <!-- Stars for ratings -->
        <span v-for="star in parseInt(rating)" :key="star">⭐</span>
        <br />
        <!-- Username -->
        <p>{{ username }}</p>
      </div>
    </div>
    <br />
    <!-- Restauran't review -->
    <p>
      {{ review }}
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  // These props are passed down from the parent component every time this component is used
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
