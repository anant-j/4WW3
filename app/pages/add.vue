<template>
  <!-- This is the page that is displayed when a user wants to add a restaurant -->
  <div class="container mt-3 align-form">
    <h1>Add a Restaurant</h1>
    <form class="align-items-center">
      <!-- The div below takes the name of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="name">Restaurant Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Enter Name"
            :class="{
              'is-invalid': !validate().name && blur,
              'is-valid': validate().name && blur,
            }"
          />
          <div class="invalid-feedback">Please enter a valid name.</div>
        </div>
      </div>
      <!-- The div below takes the description/about info of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="description">Restaurant Description</label>
          <textarea
            id="description"
            v-model="descriptiom"
            type="text"
            class="form-control"
            placeholder="Enter Description"
            :class="{
              'is-invalid': !validate().descriptiom && blur,
              'is-valid': validate().descriptiom && blur,
            }"
          />
          <div class="invalid-feedback">Please enter a description.</div>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- The div below takes the latitude of the restaurant -->
        <div class="col-md-3">
          <label for="latitude">Latitude</label>
          <input
            id="latitude"
            v-model="latitude"
            type="text"
            class="form-control"
            placeholder="Enter Latitude"
             :class="{
              'is-invalid': !validate().latitiude && blur,
              'is-valid': validate().latitiude && blur,
            }"
          />
          <div class="invalid-feedback">Please enter a valid lattitude.</div>
        </div>
        <!-- The div below takes the longitude of the restaurant -->
        <div class="col-md-3">
          <label for="longitude">Longitude</label>
          <input
            id="longitude"
            v-model="longitude"
            type="text"
            class="form-control"
            placeholder="Enter Longitude"
             :class="{
              'is-invalid': !validate().longitude && blur,
              'is-valid': validate().longitude && blur,
            }"
          />
          <div class="invalid-feedback">Please enter a valid longitude.</div>
        </div>
      </div>
      <!-- The div below takes the website for the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="website">Restaurant's Website</label>
          <input
            id="website"
            v-model="website"
            type="text"
            class="form-control"
            placeholder="Enter Website"
              :class="{
              'is-invalid': !validate().website && blur,
              'is-valid': validate().website && blur,
            }"
          />
          <div class="invalid-feedback">Please enter a valid website.</div>
        </div>
      </div>
      <!-- The div below allows the user to upload an image of the restaurant -->
      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <label for="image">Upload an Image :</label>&nbsp;
          <input
            id="image"
            type="file"
            name="image"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <!-- The div below allows the user to upload a video of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="video">Upload a Video &nbsp;&nbsp;&nbsp;:</label>&nbsp;
          <input id="video" type="file" name="video" accept="video/*" />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary" @click="submit()">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import validations from "~/mixins/validations.js";
export default {
  mixins: [validations],
  data() {
    return {
      name: "",
      description: "",
      latitude: "",
      longitude: "",
      website: "",
      blur: false,
    };
  },
  methods: {
    openPage() {
      this.$router.push({ path: "Register" }); // Switch view to Register.vue
    },
    submit() {
      this.blur = true;
      if (this.validate().result) {
        alert("Done");
      } else {
        alert("Not Done");
      }
    },
    validate() {
      const nameValidation = this.validateName(this.name);
      const descriptionValidation = this.validateDescription(this.description);
      const latitudeValidation = this.validateLatitudeLongitude(this.latitude);
      const longitudeValidation = this.validateLatitudeLongitude(this.longitude);
      const websiteValidation = this.validateWebsite(this.website);
      return {
        name: nameValidation,
        description: descriptionValidation,
        latitiude: latitudeValidation,
        longitude: longitudeValidation,
        website: websiteValidation,
        result: nameValidation && descriptionValidation && latitudeValidation && longitudeValidation && websiteValidation,
      };
    },
  },
};
</script>
