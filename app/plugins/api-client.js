export default (context, inject) => {
  inject('api', api)
  context.$api = api
}

const api = {
  login(email, password) {
    return postAPI('/api/login', {
      email,
      password,
    })
  },
  register(email, password, firstName, lastName, dob, latitude, longitude) {
    return postAPI('/api/register', {
      firstName,
      lastName,
      email,
      password,
      dob,
      latitude,
      longitude
    })
  },
  verifyToken(token) {
    return postAPI('/api/verifyJWT', {
      token      
    })
  }
}


function postAPI(url, body) {
  const data = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return data
}
