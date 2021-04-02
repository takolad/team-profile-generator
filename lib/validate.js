function validateName(name) {
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("A name must be entered.");
    } else return name;
}

function validateId(id) {
    if (typeof id !== "number" || isNaN(id) || id < 0) {
        throw new Error("A non-negative id number is required.")
    } else return id;
}

function validateEmail(email) {
    if (typeof email !== "string" || !email.trim().length) {
        throw new Error("An email must be entered.");
    } else {
        let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(regExp)) {
            return email;
        } else throw new Error("Invalid email format entered.");
    }
}

module.exports = { validateName, validateId, validateEmail };