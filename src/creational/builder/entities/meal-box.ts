import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: Array<MealCompositeProtocol> = [];

  getPrice(): number {
    return this._children.reduce((total, meal) => total + meal.getPrice(), 0);
  }

  add(...meals: MealCompositeProtocol[]) {
    meals.forEach((item) => this._children.push(item));
  }
}
