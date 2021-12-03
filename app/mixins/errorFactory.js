export default {
  data() {
    return {
      errorHandler: {
        emailInvalid: {
          message:
            'The email entered is invalid. Please try again with a valid email.',
          severity: 'error',
        },
        passwordInvalid: {
          message:
            'The password entered is invalid. Please try again with a valid password.',
          severity: 'error',
        },
        dobInvalid:{
            message: 'The date of birth entered is invalid. Please try again with a valid date of birth.',
            severity: 'error',
        },
        latitudeLongitudeInvalid:{
            message: 'The latitude and longitude entered is invalid. Please try again with a valid latitude and longitude.',
            severity: 'error',
        },
        passwordIncorrect: {
          message: 'The password entered is incorrect. Please try again.',
          severity: 'error',
        },
        emailNotFound: {
          message:
            'The email entered is not registered. Please register and try again.',
          severity: 'error',
        },
        emailAlreadyExists:{
            message: 'The email entered is already registered. Please login instead.',
            severity: 'error',
        },
        unknown: {
          message: 'An unknown error has occurred. Please try again.',
          severity: 'error',
        },
        unauthorized:{
            message: 'You are not authorized to perform this action. Your session might have expired, please login and try again.',
            severity: 'error',
        },
        imageUploadFailed:{
            message: 'The image upload failed. Please try again.',
            severity: 'warning',
        },
        restaurantNotFound:{
            message: 'The restaurant you are trying to access does not exist. Please try again.',
            severity: 'warning',
        },
        restaurantsNotFound:{
            message: 'No restaurants found. Please try searching again with a different criteria',
            severity: 'warning',
        },
        reviewsNotFound:{
            message: 'No reviews were found for this restaurant.',
            severity: 'warning',
        },
        reviewNotAdded:{
            message: 'The review could not be added. Please try again.',
            severity: 'error',
        }
      },
    }
  },
}
