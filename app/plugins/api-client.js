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
    },
    addRestaurant(name, description, latitude, longitude, website = null, phone = null, token = null, image = null) {
        return postAPI('/api/addRestaurant', {
            name,
            description,
            latitude,
            longitude,
            website,
            phone,
            token,
            image,
        })
    },
    getRestaurant(id) {
        return getAPI('/api/getRestaurant', { id })
    },
    getRestaurants(name = null, rating = null) {
        if (name) {
            return getAPI('/api/getRestaurants', { name })
        }
        if (rating) {
            return getAPI('/api/getRestaurants', { rating })
        } else {
            return getAPI('/api/getRestaurants')
        }
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

function getAPI(url, parameters = null) {
    let urlString = `http://localhost:8080${url}`;
    let firstAdded = false;
    if (parameters) {
        for (const parameter of Object.keys(parameters)) {
            if (!firstAdded) {
                urlString += `?${parameter}=${parameters[parameter]}`
                firstAdded = true;
            } else {
                urlString += `&${parameter}=${parameters[parameter]}`
            }
        }
    }
    const data = fetch(urlString, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return data
}