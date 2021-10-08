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
            type="text"
            class="form-control"
            placeholder="Enter Name"
          />
        </div>
      </div>
      <!-- The div below takes the description/about info of the restaurant -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="description">Restaurant Description</label>
          <textarea
            id="description"
            type="text"
            class="form-control"
            placeholder="Enter Description"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- The div below takes the latitude of the restaurant -->
        <div class="col-md-3">
          <label for="latitude">Latitude</label>
          <input
            id="latitude"
            type="text"
            class="form-control"
            placeholder="Enter Latitude"
          />
        </div>
        <!-- The div below takes the longitude of the restaurant -->
        <div class="col-md-3">
          <label for="longitude">Longitude</label>
          <input
            id="longitude"
            type="text"
            class="form-control"
            placeholder="Enter Longitude"
          />
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
        <button type="button" class="col-3 btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
