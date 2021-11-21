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

export function clearStore() {
    if(process.client) {
      localStorage.removeItem("ousemouseAuthToken")
      localStorage.removeItem("ousemouseAuthEmail")
    }
}
