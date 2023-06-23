import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product service unit tests", () => {
  it("should change the price of all products", () => {
    const product1 = new Product("1", "Product 1", 100);
    const product2 = new Product("1", "Product 1", 200);
    const products = [product1, product2];
    ProductService.increasePrice(products,100);
    expect(product1.price).toEqual(200);
    expect(product2.price).toEqual(400);
  })
})