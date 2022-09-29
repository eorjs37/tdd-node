const productController = require("../../controller/product");
const productModel = require("../../models/Product");

productModel.create = jest.fn();
describe("Product Controller Create", () => {
    //테스트 케이스
    it("should have a createProduct function", () => {
        expect(typeof productController.creatProduct).toBe("function");
    });

    it("should call ProductModel.create", () => {
        productController.creatProduct();
        expect(productModel.create).toBeCalled();
    });
});
