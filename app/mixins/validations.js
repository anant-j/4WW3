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