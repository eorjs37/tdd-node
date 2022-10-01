const {} = require("jest");
const httpMocks = require("node-mocks-http");
const peopleController = require("../../controller/people");
const newPerson = require("../data/new-person.json");
const personModel = require("../../models/People");
personModel.create = jest.fn();

describe("People Controller Create", () => {
    let req, res, next;
    beforeEach(() => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;
    });

    //테스트 케이스
    it("should have a createPeople function", () => {
        expect(typeof peopleController.createPeople).toBe("function");
    });

    it("should call peopleController.createPeople", () => {
        req.body = newPerson;
        peopleController.createPeople(req, res, next);
        expect(personModel.create).toBeCalledWith(newPerson);
    });

    it("should return 201 response code ", () => {
        peopleController.createPeople(req, res, next);
        expect(res.statusCode).toBe(201);
        //send/json이 호출되었는지 확인
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should return json body in response", () => {
        personModel.create.mockReturnValue(newPerson);
        peopleController.createPeople(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newPerson);
    });
});
