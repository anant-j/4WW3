<template>
  <div class="container mt-3 alignForm">
    <h1>Submit a Restaurant for Review</h1>
    <form class="align-items-center">
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
        <div class="col-md-3">
          <label for="latitude">Latitude</label>
          <input
            id="latitude"
            type="text"
            class="form-control"
            placeholder="Enter Latitude"
          />
        </div>
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
