const {} = require("jest");
const peopleController = require("../../controller/people");
peopleController.createPeople = jest.fn();
describe("People Controller Create", () => {
    //테스트 케이스
    it("should have a createPeople function", () => {
        expect(typeof peopleController.createPeople).toBe("function");
    });

    it("should call peopleController.createPeople", () => {
        peopleController.createPeople();
        expect(peopleController.createPeople).toBeCalled();
    });
});
