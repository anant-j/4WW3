export default {
  methods: {
    showToast(message, type = 'success') {
      if (type === 'success') {
        this.$toast.success(message)
      }
      if(type === 'error') {
        this.$toast.error(message)
      }
    },
  },
}
