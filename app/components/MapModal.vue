<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <font-awesome-icon :icon="['fas', 'eye']" />
    </button>
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
              Location on map
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
            <GmapMap
              ref="mapRef"
              :center="{ lat: latitude, lng: longitude }"
              :zoom="18"
              style="width: auto; height: 50vh"
              :options="{
                fullscreenControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                maxZoom: 18,
                minZoom: 4,
                clickableIcons: false,
                styles: [
                  {
                    featureType: 'poi.business',
                    stylers: [{ visibility: 'off' }],
                  },
                  {
                    featureType: 'poi.park',
                    stylers: [{ visibility: 'off' }],
                  },
                ],
              }"
            >
              <GmapMarker
                :position="{ lat: latitude, lng: longitude }"
                :clickable="true"
              />
            </GmapMap>
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
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
}
</script>
