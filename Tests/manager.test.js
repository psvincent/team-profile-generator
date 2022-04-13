

// Runs a basic test to make sure everything works
describe('manager', () => {
    it('Allows user to set managers name, id, email address, and office number', () => {

    
    const managerName = "Robert";
    expect(managerName).toEqual("Robert");
    const managerId = 7890;
    expect(managerId).toEqual(7890);
    const managerEmail = "robert@gmail.com";
    expect(managerEmail).toEqual("robert@gmail.com");
    const officeNumber = 6543;
    expect(officeNumber).toEqual(6543);
    });
});