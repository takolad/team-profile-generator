const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it("should create an object with a name, id, email, and office number if provided valid arguments", 
        () => {
            const empName = "Emilio Sheen";
            const empId = 2;
            const empEmail = "emilio86@fakemail.com";
            const offNum = 1;

            const manager = new Manager(empName, empId, empEmail, offNum);

            expect(manager).toEqual( {
                name : empName,
                id : empId,
                email : empEmail,
                officeNumber : offNum } );
        }
    )

    it("should throw an error when a negative office number is entered", () => {
        const empName = "Emilio Sheen";
        const empId = 2;
        const empEmail = "emilio86@fakemail.com";
        const offNum = -55;

        const manager = () => new Manager(empName, empId, empEmail, offNum);
        const err = new Error ("A non-negative office number is required.");

        expect(manager).toThrowError(err);
    })
})