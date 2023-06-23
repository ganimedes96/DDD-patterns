import { Address } from "../value-object/address";
import CustomerFactory from "./customer-factory";

describe("Customer factory unit tests", () => {
    it("should create a customer", () => {
        const customer = CustomerFactory.create("Customer 1");
        expect(customer.id).toBeDefined();
        expect(customer.name).toEqual("Customer 1");
        expect(customer.Address).toBeUndefined();
    })
    it("should create a customer with address", () => {
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
        let customer = CustomerFactory.createWithAddress('Customer 2', address);
        expect(customer.id).toBeDefined();
        expect(customer.name).toEqual("Customer 2");
        expect(customer.Address).toEqual(address);
    })    
})