import { Customer } from "../../../../domain/customer/entity/customer"
import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository-interface"
import { Address } from "../../../../domain/customer/value-object/address"
import CustomerModel from "./customer.model"

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      rewardPoints: entity.rewardPoints,
      street: entity.Address.street,
      number: entity.Address.number,
      zipcode: entity.Address.zipcode,
      city: entity.Address.city,
      active: entity.isActivate()
    })
  }

  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: entity.name,
        rewardPoints: entity.rewardPoints,
        street: entity.Address.street,
        number: entity.Address.number,
        zipcode: entity.Address.zipcode,
        city: entity.Address.city,
        active: entity.isActivate()
      },
      {
        where: {
          id: entity.id
        }
      }
    )
  }
  async find(id: string): Promise<Customer> {
    let customerModel
    try {
      customerModel = await CustomerModel.findOne({
        where: {
          id: id
        },
        rejectOnEmpty: true
      })

    } catch (error) {
      throw new Error("Customer not found")
    }

    const customer = new Customer(id, customerModel.name)
    const address = new Address(
      customerModel.street,
      customerModel.number,
      customerModel.city,
      customerModel.zipcode
    )
    customer.changeAddress(address)
    return customer
  }
  async findAll(): Promise<Customer[]> {
    const customerModels = await CustomerModel.findAll();

    const customers = customerModels.map((customerModels) => {
      let customer = new Customer(customerModels.id, customerModels.name);
      customer.addRewardPoints(customerModels.rewardPoints);
      const address = new Address(
        customerModels.street,
        customerModels.number,
        customerModels.city,
        customerModels.zipcode
      );
      customer.changeAddress(address);
      if (customerModels.active) {
        customer.activate();
      }
      return customer;
    });

    return customers;
  }
}