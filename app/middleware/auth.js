export default function ({ route, store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user.loggedIn) {
      return redirect(`/Login?callback=${route.name}`)
    }
  }