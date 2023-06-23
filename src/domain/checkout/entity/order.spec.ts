import { Order } from "./order";
import { OrderItem } from "./order-item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError('Id is required');
  })
  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError('CustomerId is required');
  })

  it("should throw error when items is empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError('Items is required');
  })

  it("should calculate total", () => {
    const item = new OrderItem("1", "Item 1", 10, "p1", 2);
    const item2 = new OrderItem("2", "Item 2", 15, "p2", 2);

    const order = new Order('o1', 'c1', [item]);

    let total = order.total();

    expect(total).toBe(20);

    const order2 = new Order('o2', 'c2', [item, item2]);
    total = order2.total();
    expect(total).toBe(50);

  })
  it("should check if the quantity is less or equal than 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 10, "p1", 0);
      new Order('o1', 'c1', [item]);
    }).toThrowError('Quantity must be greater than 0');
  })
})