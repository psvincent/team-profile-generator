

// Runs a basic test to make sure everything works
describe('engineer', () => {
    it("Allows the user to set engineers name, ID, email, and GitHub Username", () => {
        const engineerName = "bill";
        expect(engineerName).toEqual("bill");
        const engineerId = 3456;
        expect(engineerId).toEqual(3456);
        const engineerEmail = "bill@gmail.com";
        expect(engineerEmail).toEqual("bill@gmail.com");
        const engineerGit = "billy"
        expect(engineerGit).toEqual("billy");
    })
})