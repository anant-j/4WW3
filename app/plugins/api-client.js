export default (context, inject) => {
  inject('api', api)
  context.$api = api
}

const api = {
  login(email, password) {
    const data = fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    return data
  },
}
