interface User {
  name: string;
  age: number;
}

export class Singleton {
  private static _instance: Singleton | null = null;
  private users: User[] = [];
  //bloqueando a instanciação do contrutor
  private constructor() {} //eslint-disable-line

  static get instance(): Singleton {
    // se não tiver uma instancia, ele cria.
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const instance1 = Singleton.instance;
const instance2 = Singleton.instance;
const instance3 = Singleton.instance;

console.log(instance1 === instance2); // true

instance1.add({ name: 'Pedro', age: 19 });
instance2.add({ name: 'Maria', age: 23 });
instance3.show();
