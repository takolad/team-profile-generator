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

function validateOfficeNum(officeNumber) {
    if (typeof officeNumber !== "number" ||
     isNaN(officeNumber) || officeNumber < 0) {
        throw new Error("A non-negative office number is required.")
    } else return officeNumber;
}

function validateGithub(github) {
    if (typeof github !== "string" || !github.trim().length) {
        throw new Error("A GitHub username must be entered.");
    } else {
        let regExp = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
        if (github.match(regExp)) {
            return github;
        } else throw new Error("Invalid GitHub username format entered.");
    }
}

module.exports = { validateName, 
                    validateId, 
                    validateEmail, 
                    validateOfficeNum, 
                    validateGithub };