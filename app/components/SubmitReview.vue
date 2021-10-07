<template>
  <div>
    <button
      type="button"
      class="btn btn-info"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Add your review
    </button>

    <!-- Modal -->
    <div
      id="staticBackdrop"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            class="modal-header"
            :class="{
              'background-light': !$store.state.nightMode,
              'text-dark': !$store.state.nightMode,
              'background-dark': $store.state.nightMode,
              'text-light': $store.state.nightMode,
            }"
          >
            <h5 id="staticBackdropLabel" class="modal-title">
              Add your review
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body"
            :class="{
              'background-light': !$store.state.nightMode,
              'text-dark': !$store.state.nightMode,
              'background-dark': $store.state.nightMode,
              'text-light': $store.state.nightMode,
            }"
          >
            <form class="align-items-center">
              <div class="row justify-content-center">
                <div class="col">
                  <label for="dov">When did you visit</label>
                  <input id="dov" type="date" class="form-control" />
                </div>
              </div>
              <div class="row justify-content-center mt-3">
                <div class="col">
                  <label for="experienceRating">Rate your experience</label>
                  <select
                    id="experienceRating"
                    class="form-select"
                    aria-label="Experience"
                  >
                    <option selected>Rate your experience</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div class="row justify-content-center mt-3">
                <div class="col">
                  <label for="reviewTitle">Review Title</label>
                  <input
                    id="reviewTitle"
                    type="text"
                    class="form-control"
                    placeholder="Enter Review Title"
                  />
                </div>
              </div>
              <div class="row justify-content-center mt-3">
                <div class="col">
                  <label for="description">Description</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            class="modal-footer"
            :class="{
              'background-light': !$store.state.nightMode,
              'text-dark': !$store.state.nightMode,
              'background-dark': $store.state.nightMode,
              'text-light': $store.state.nightMode,
            }"
          >
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>