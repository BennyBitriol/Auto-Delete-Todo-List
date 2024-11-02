export interface IFruit {
  type: string;
  name: string;
}

export interface IVegetable extends IFruit, IFruit {}

export enum EType {
  FRUIT = "Fruit",
  VEGETABLE = "Vegetable",
}
