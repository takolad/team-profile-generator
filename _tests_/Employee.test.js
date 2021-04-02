const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it("should create an object with a name, id, and email if provided valid arguments", 
        () => {
            const empName = "John Doe";
            const empId = 41;
            const empEmail = "johnd@fakemail.com";
            
            const emp = new Employee(empName, empId, empEmail);

            expect(emp).toEqual( { 
                name : empName, 
                id : empId, 
                email : empEmail } );
    })

    it("should throw an error when no name is entered", () => {
        const empName = "";
        const empId = 0;
        const empEmail = "janed@fakemail.com";

        const emp = () => new Employee(empName, empId, empEmail);
        const err = new Error ("A name must be entered.");

        expect(emp).toThrowError(err);
    })
    
    it("should throw an error when a negative id is entered", () => {
        const empName = "Rick Donles";
        const empId = -8;
        const empEmail = "rickd@fakemail.com";

        const emp = () => new Employee(empName, empId, empEmail);
        const err = new Error ("A non-negative id number is required.");

        expect(emp).toThrowError(err);
    })

    it("should throw an error when an invalid email is entered", () => {
        const empName = "Zack Unfaire";
        const empId = 1;
        const empEmail = "zackrulz.com";

        const emp = () => new Employee(empName, empId, empEmail);
        const err = new Error ("Invalid email format entered.")

        expect(emp).toThrowError(err);
    })
})