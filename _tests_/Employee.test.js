const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it("should create an object with a name, id, and email if provided valid arguments", 
        () => {
            const empName = "John Doe";
            const empId = 41;
            const empEmail = "johnd@fakemail.com";
            
            const emp = new Employee(empName, empId, empEmail);

            expect(emp.name).toEqual(empName);
            expect(emp.id).toEqual(empId);
            expect(emp.email).toEqual(empEmail);
    })
})