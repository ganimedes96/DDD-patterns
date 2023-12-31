import { OrderItem } from "./order-item";

export class Order {
  _id: string;
  _customerId: string;
  _items: OrderItem[];
  _total: number;
  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }
  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get items(): OrderItem[] {
    return this._items;
  }
  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._customerId.length === 0) {
      throw new Error("CustomerId is required");
    }
    if (this._items.length === 0) {
      throw new Error("Items is required");
    }
    if (this._items.some(item => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }

    return true;
  }
  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}