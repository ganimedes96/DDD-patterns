export class OrderItem {
  _id: string;
  _name: string;
  _productId: string;
  _price: number;
  _quantity: number;
  constructor(id: string, name: string, price: number, productId: string, quantity: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._quantity = quantity
    this._productId = productId
  }

  get id(): string {
    return this._id;  
  }

  get productId(): string {
    return this._productId
  }

  get name(): string {
    return this._name;
  }
  get quantity(): number {
    return this._quantity
  }
  get price(): number {
    return this._price * this._quantity;
  }


}