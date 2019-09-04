import { TrackableEntity } from 'trackable-entities';
import { isReference, autoserializeAs, autoserializeAsArray } from 'dcerialize';
import { Product } from './productdcerialize';
import { forwardRef } from '@angular/core';

@isReference(true)
export class Category extends TrackableEntity {
  @autoserializeAs(() => forwardRef(() =>Number))
  categoryId: number;
  @autoserializeAs(() => forwardRef(() =>String))
  categoryName: string;
  @autoserializeAsArray(() => forwardRef(() => Product))
  products: Product[];

  constructor();
  constructor(categoryId: number, categoryName: string, ...products: Product[]);
  constructor(categoryId?: number, categoryName?: string, ...products: Product[]) {
    super();
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.products = products;
    return super.proxify(this);
  }
}