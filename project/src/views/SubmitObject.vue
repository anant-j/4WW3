<template>
  <div class="container mt-3 submitObject">
    <h1>Submit a Restaurant for Review</h1>
    <form class="align-items-center">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="name">Restaurant Name</label>
          <input type="text" id="name" class="form-control" placeholder="Enter Name" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="description">Restaurant Description</label>
          <textarea
            type="text"
            id="description"
            class="form-control"
            placeholder="Enter Description"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <label for="latitude">Latitude</label>
          <input type="text" id="latitude" class="form-control" placeholder="Enter Latitude" />
        </div>
        <div class="col-md-3">
          <label for="longitude">Longitude</label>
          <input type="text" id="longitude" class="form-control" placeholder="Enter Longitude" />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <label for="image">Upload an Image :</label>&nbsp;
          <input
            type="file"
            class="form-control"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label for="video">Upload a Video &nbsp;&nbsp;&nbsp;:</label>&nbsp;
          <input
            type="file"
            class="form-control"
            id="video"
            name="video"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <button type="button" class="col-3 btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

