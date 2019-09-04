

import {
  DeserializeArray,
  Deserialize,
  InstantiationMethod,
  RefCycleDetectionEnable,
  RefClean,
  RefCycleDetectionDisable,
  SerializeArray
} from "dcerialize";

/* import {
  createModelSchema,
  primitive,
  reference,
  list,
  object,
  identifier,
  serialize,
  deserialize,
} from 'serializr'; */
import { Category } from './categorydcerialize';
import { Product } from './productdcerialize';
/* import { Category } from './categoryserializrdecorators';
import { Product } from './productserializrdecorators'; */
/* import { Category } from './categorydcerialize';
import { Product } from './productdcerialize'; */


export class MockNorthwind {

  Categories = [
    { categoryId: 1, categoryName: 'Beverages' } as Category,
    { categoryId: 2, categoryName: 'Condiments' } as Category,
    { categoryId: 3, categoryName: 'Confections' } as Category,
    { categoryId: 4, categoryName: 'Dairy Products' } as Category,
    { categoryId: 5, categoryName: 'Grains/Cereals' } as Category,
    { categoryId: 6, categoryName: 'Meat/Poultry' } as Category,
    { categoryId: 7, categoryName: 'Produce' } as Category,
    { categoryId: 8, categoryName: 'Seafood' } as Category,
  ];


  Products = [
    { productId: 1, productName: 'Chai', unitPrice: 10, categoryId: 1, category: this.Categories[0] } as Product,
    { productId: 2, productName: 'Chang', unitPrice: 20, categoryId: 1, category: this.Categories[0] } as Product,
    { productId: 3, productName: 'Aniseed Syrup', unitPrice: 30, categoryId: 2, category: this.Categories[1] } as Product,
    { productId: 4, productName: 'Chef Anton\'s Cajun Seasoning', unitPrice: 40, categoryId: 2, category: this.Categories[1] } as Product,
    { productId: 5, productName: 'Chef Anton\'s Gumbo Mix', unitPrice: 50, categoryId: 2, category: this.Categories[1] } as Product,
  ];


  constructor() {
/*
    const test2 = SerializeArray(this.Products, () => Product);
    this.Products = DeserializeArray(test2, () => Product, undefined, undefined, undefined, InstantiationMethod.ObjectCreate);

    const test3 = SerializeArray(this.Categories, () => Category);
    this.Categories = DeserializeArray(test2, () => Category, undefined, undefined, undefined, InstantiationMethod.ObjectCreate);
*/
/*     createModelSchema(Category, {
      categoryId: primitive(),
      categoryName: primitive(),
      products: list(object(Product))
    });

    createModelSchema(Product, {
      productId: primitive(),
      productName: primitive(),
      unitPrice: primitive(),
      categoryId: primitive(),
      category: object(Category)
    })

    const test = serialize(this.Products[0]);
    this.Products[0] = deserialize(Product, test); */

    this.Categories[0].products = [this.Products[0], this.Products[1]];
    this.Categories[1].products = [this.Products[2], this.Products[3], this.Products[4]];
  }
}
