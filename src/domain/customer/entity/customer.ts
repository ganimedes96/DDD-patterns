import { Address } from "../value-object/address";

export class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;
  constructor(id: string, name: string,) {
    this._id = id;
    this._name = name;
    this.validate();
   
  }
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get Address(): Address {
    return this._address;
  }
  validate() {
    if(this._name.length === 0){
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
  }

  changeName(name: string) {
    this._name = name;
  }
  changeAddress(address: Address) {
    this._address = address;
  }
  isActivate (): boolean {
    return this._active
  }

  activate () {
    if(this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    return this._active = true;
  }

  set Address(address: Address) {
    this._address = address;
  }
  

  deactivate () {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }
  
}