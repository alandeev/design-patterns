interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  addAddress(data: Address): void {
    this.addresses.push(data);
  }

  clone(): this {
    const newObj = Object.create(this);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }
}

const address1 = new Address('Av Brasil', 15);

const person1 = new Person('Luiz', 30);
person1.addAddress(address1);

const person2 = person1.clone();

person1.addresses[0].street = 'Bla bla bla';

console.log(person2.addresses[0].street); //Av Brasil
console.log(person1.addresses[0].street); // Bla bla bla
