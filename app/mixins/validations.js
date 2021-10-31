export default {
    methods: {
        validateEmail(email) {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        validatePassword(password) {
            if (password.length < 5) {
                return false;
            }
            if (!hasSymbol(password)) {
                return false;
            }
            if (!hasNumber(password)) {
                return false;
            }
            if (!hasLetter(password)) {
                return false;
            }
            return true;
        },
        // TODO
        validateName(name) {
            return name && name.trim()
        },
        validateDescription(description) {
            return ((description.split(/\b(\s)/)).length >= 20)
        },
        validateLatitudeLongitude(coordinate) {

        },
        validateWebsite(website) {
            const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
            return regexp.test(website);
        }

    },
};

function hasSymbol(string) {
    return (
        string.includes("$") ||
        string.includes("%") ||
        string.includes("&") ||
        string.includes("#") ||
        string.includes("!") ||
        string.includes("@") ||
        string.includes("*") ||
        string.includes("^")
    );
}

function hasNumber(string) {
    return /\d/.test(string);
}

function hasLetter(string) {
    return /[a-z]/.test(string);
}