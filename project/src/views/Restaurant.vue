<template>
  <div>
    <Map id="restaurantMap" />
    <div class="container mt-5">
      <h3 class="pb-4 mb-4 border-bottom text-center">Osmows</h3>
      <div class="row g-5">
        <div class="col-md-8">
          <h3>9 Reviews</h3>
          <hr />
          <h4>Perfect place for dinner</h4>
          <p>⭐⭐⭐⭐</p>
          <p>
            Amazing restaurant. Had the Philly Veggie Wrap. Be careful as the
            sauce drips and can get stuck in beard.
          </p>
          <hr />
          <h4>Owner is friedly</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            He is always serving customers with a smile on his face. He is like
            a family member.
          </p>
          <hr />
          <h4>Always out of mushrooms</h4>
          <p>⭐</p>
          <p>
            I have never found mushrooms at this restaurant. I don't understand
            how they can operate such a big business but always be out of
            mushrooms. They need to fix this.
          </p>
          <hr />
          <h4>Expensive</h4>
          <p>⭐⭐</p>
          <p>Low quantity.<br />Not good for wallet.</p>
          <hr />
          <h4>Rude staff</h4>
          <p>⭐</p>
          <p>They need to learn customer service.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
          <h4>Better than Lazeez</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Would buy again.</p>
          <hr />
        </div>

        <div class="col-md-4">
          <div class="position-sticky top2rem">
            <div class="p-4 bg-light rounded">
              <h4 class="fst-italic">About</h4>
              <p class="mb-0">
                Osmow's is a fast casual Mediterranean restaurant capturing a
                truly modern taste while giving customers the luxury of
                customizing their preferences.
              </p>
              <br />
              <h4 class="fst-italic">Location</h4>
              <p class="mb-0">Hamilton, Ontario</p>
              <br />
              <h4 class="fst-italic">Hours</h4>
              <p class="mb-0">Monday - 10:00 A.M - 9:00 P.M</p>
              <p class="mb-0">Tuesday - 10:00 A.M - 9:00 P.M</p>
              <p class="mb-0">Wednesday - 10:00 A.M - 9:00 P.M</p>
              <p class="mb-0">Thursday - 10:00 A.M - 9:00 P.M</p>
              <p class="mb-0">Friday - 10:00 A.M - 9:00 P.M</p>
              <p class="mb-0">Saturday - 10:00 A.M - 9:00 P.M</p>
              <p class="mb-0">Sunday - 10:00 A.M - 9:00 P.M</p>
              <br />
              <h4 class="fst-italic">Website</h4>
              <a href="https://mrosmow.com/" target="_">https://mrosmow.com/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
  components: {
    Map,
  },
};
</script>

