import { MainDishBuilder } from './entities/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
// import { MealBox } from './entities/meal-box';
// import { Rice } from './entities/meals';

// export class Person {
//   constructor(public name?: string, public age?: number) {}
// }

// export class PersonBuilder {
//   private person = new Person();

//   newPerson(): void {
//     this.person = new Person();
//   }

//   setName(name: string): this {
//     this.person.name = name;
//     return this;
//   }

//   setAge(age: number): this {
//     this.person.age = age;
//     return this;
//   }

//   getResult(): Person {
//     return this.person;
//   }
// }

// const personBuilder = new PersonBuilder();
// //const person1 = personBuilder.setName('luiz').setAge(30).getResult();

// personBuilder.newPerson();
// //const person2 = personBuilder.setName('maria').setAge(50).getResult();

// const mealBox = new MealBox();

// const rice = new Rice('Arroz', 16);
// const beans = new Rice('Feijão', 10);
// const meat = new Rice('Carne', 23);

// mealBox.add(rice, beans, meat);

// const total = mealBox.getPrice();

// console.log({ total });
