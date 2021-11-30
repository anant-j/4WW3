export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function validatePassword(password) {
  if (password.length < 5) {
    return false
  }
  if (!hasSymbol(password)) {
    return false
  }
  if (!hasNumber(password)) {
    return false
  }
  if (!hasLetter(password)) {
    return false
  }
  return true
}

export function validateLatitude(latitude) {
  return (
    latitude && Math.abs(latitude) <= 90
  )
}

export function validateLongitude(longitude) {
  return (
    longitude && Math.abs(longitude) <= 180
  )
}

export function validateDateOfBirth(date) {
  if (date === '' || date == null) {
    return false
  }
  const givenDate = new Date(date) // dd-mm-YYYY
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (givenDate > today) {
    return false
  }
  return true
}

function hasSymbol(string) {
  return (
    string.includes('$') ||
    string.includes('%') ||
    string.includes('&') ||
    string.includes('#') ||
    string.includes('!') ||
    string.includes('@') ||
    string.includes('*') ||
    string.includes('^')
  )
}

function hasNumber(string) {
  return /\d/.test(string)
}

function hasLetter(string) {
  return /[A-Za-z]/.test(string)
}
