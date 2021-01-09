export abstract class Animal {
  protected abstract makeNoise(): string;

  makeSound(): void {
    console.log(this.makeNoise());
  }
}

export class Dog extends Animal {
  protected makeNoise(): string {
    return "auau";
  }
}

const dog = new Dog();
dog.makeSound();