<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop2"
      :disabled="!url"
    >
      <font-awesome-icon :icon="['fas', 'eye']" />
    </button>
    <div
      id="staticBackdrop2"
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
            <h5 id="staticBackdropLabel" class="modal-title">Image Preview</h5>
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
            <img :src="url" style="width: 100%" />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
