import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private _price: number) {}

  getPrice(): number {
    return this._price;
  }
}
