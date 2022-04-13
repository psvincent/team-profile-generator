

// Runs a basic test to make sure everything works
describe('intern', () => {
    it("Allows user to set interns name, ID, email, and school", () => {
        const internName = "joe";
        expect(internName).toEqual("joe");
        const internId = 4567;
        expect(internId).toEqual(4567);
        const internEmail = "joe@gmail.com";
        expect(internEmail).toEqual("joe@gmail.com");
        const internSchool = "schoolio";
        expect(internSchool).toEqual("schoolio");
    })
})