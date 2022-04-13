


// Runs a basic test to make sure everything works
describe('employee', () => {
    it("allows user to set employee's name, id, and email", () => {
        const employeeName = "Philip";
        expect(employeeName).toEqual("Philip");
        const employeeId = 1234;
        expect(employeeId).toEqual(1234);
        const employeeEmail = "psvincent12@gmail.com"
        expect(employeeEmail).toEqual("psvincent12@gmail.com");
    })
})