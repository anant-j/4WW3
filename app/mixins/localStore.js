export function storeToken(token, email) {
    if(process.client) {
      localStorage.setItem("ousemouseAuthToken", token)
      localStorage.setItem("ousemouseAuthEmail", email)
    }
}

export function getToken() {
    if(process.client) {
      return localStorage.getItem("ousemouseAuthToken")
    }
}

export function getEmail() {
  if(process.client) {
    return localStorage.getItem("ousemouseAuthEmail")
  }
}

export function clearStore() {
    if(process.client) {
      localStorage.removeItem("ousemouseAuthToken")
      localStorage.removeItem("ousemouseAuthEmail")
    }
}
