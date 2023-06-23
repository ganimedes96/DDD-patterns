import Product from "./product";


describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
  
   expect (() => {
      new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  })
  it ("should throw error when name is empty", () => {
    expect(() => {
       new Product("1", "", 100);
    }).toThrowError("Name is required");
  })
  it ("Should throw error when price is negative", () => {
    expect(() => {
       new Product("1", "Product 1", -10);
    }).toThrowError("Price must be greater than 0");
  })

  it ("Should change the name", () => {
    const product = new Product("1", "Product 1", 100);
    product.changeName("Product 2");
    expect(product.name).toEqual("Product 2");
  })

  it ("Should change the price", () => {
      const product = new Product("1", "Product 1", 100);
      product.changePrice(200);
      expect(product.price).toEqual(200);
  })
  
})