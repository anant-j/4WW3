export default {
    methods: {
        getLocation(redirect = false) {
            if (!redirect) {
                navigator.geolocation.getCurrentPosition(
                    this.getLocationSuccess,
                    this.getLocationError
                );
            } else {
                navigator.geolocation.getCurrentPosition(
                    this.getLocationSuccessRedirect,
                    this.getLocationError
                );
            }
        },
        getLocationSuccess(pos) {
            const payload = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            };
            this.$store.commit("setUserLocation", payload);
        },
        getLocationError() {
            this.$store.commit("userLocationFailed");
        },
        getLocationSuccessRedirect(pos) {
            const payload = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            };
            this.$store.commit("setUserLocation", payload);
            this.$router.push({
                path: "search",
                query: { by: "location" },
            });
        },
    },
};