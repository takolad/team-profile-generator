const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it("should create an object with a name, id, email, and school if provided valid arguments",
        () => {
            const empName = "Zack Unfaire";
            const empId = 11;
            const empEmail = "unfairzack@fakemail.com";
            const school = "UTSA";

            const intern = new Intern(empName, empId, empEmail, school);

            expect(intern).toEqual( {
                name: empName,
                id : empId,
                email : empEmail,
                school : school 
            });
    })
})