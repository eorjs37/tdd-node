const request = require("supertest");
const app = require("../../server");
const newProduct = require("../data/new-product.json");
it("POST /api/products", async () => {
    const response = await request(app).post("/api/products").send(newProduct);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Gloves");
    expect(response.body.description).toBe("good to wear");
    expect(response.body.price).toBe(15);
});

it("should return 500 on POST /api/products", async () => {
    const response = await request(app).post("/api/products").send({ name: "phone" });

    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({ message: "Product validation failed: description: Path `description` is required." });
});

it("GET /api/productss", async () => {
    const response = await request(app).get("/api/products");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].name).toBeDefined();
    expect(response.body[0].description).toBeDefined();
});
