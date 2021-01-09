export class Carro {
  private motor: Motor;

  constructor(motor: Motor) {
    this.motor = motor;
  }
}

export class Motor {}

const motor = new Motor();
const carro = new Carro(motor);

console.log(carro);
