import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "John");
    }).toThrowError('Id is required');
  })
  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("1", "");
    }).toThrowError('Name is required');
  })
  it ("Should change the name", () => {
    const customer = new Customer("1", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  })
  it ("Should activate a customer", () => {
    const customer = new Customer("1", "John");
    customer.isActivate();
    expect(customer.isActivate()).toBe(true);
  })
  it("Should deactivate a customer", () => {
    const customer = new Customer("1", "John");
    customer.deactivate();
    expect(customer.isActivate()).toBe(false);
  })
  it ("Should throw error when address is undefined when activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  })
  it("Should calculate reward points", () => {
    const customer = new Customer("1", "Customer");
    expect(customer.rewardPoints).toBe(0);
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  })
})