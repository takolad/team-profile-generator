const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it("should create an object with a name, id, email, and github if provided valid arguments",
    () => {
        const empName = "Iroquois Pliskin";
        const empId = 61;
        const empEmail = "scissorsnake@fakemail.com";
        const github = "snektime";

        const engineer = new Engineer(empName, empId, empEmail, github);

        expect(engineer).toEqual( {
            name : empName,
            id : empId,
            email : empEmail,
            github : github 
        });
    })

    it("should throw an error if the entered github username is longer than 39 characters",
    () => {
        const empName = "Iroquois Pliskin";
        const empId = 61;
        const empEmail = "scissorsnake@fakemail.com";
        const github = "snektimesnektimesnektimesnektimesnektime"; // 40 characters

        const engineer = () => new Engineer(empName, empId, empEmail, github);
        const err = new Error("Invalid GitHub username format entered.")

        expect(engineer).toThrowError(err);
    })
})