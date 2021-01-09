export class Singleton {
  private static _instance: Singleton | null = null;

  //bloqueando a instanciação do contrutor
  private constructor() {} //eslint-disable-line

  static get instance(): Singleton {
    // se não tiver uma instancia, ele cria.
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const instance1 = Singleton.instance;
const instance2 = Singleton.instance;

console.log(instance1 === instance2); // true
