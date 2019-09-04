import { TrackableEntity } from 'trackable-entities';
import { isReference, autoserializeAs, autoserializeAsArray } from 'dcerialize';
import { Category } from './categorydcerialize';
import { forwardRef } from '@angular/core';

export class Product extends TrackableEntity {
    @autoserializeAs(() => forwardRef(() => Number))
    productId: number;
    @autoserializeAs(() => forwardRef(() =>String))
    productName: string;
    @autoserializeAs(() => forwardRef(() =>Number))
    unitPrice: number;
    @autoserializeAs(() => forwardRef(() =>Number))
    categoryId: number;
    @autoserializeAs(() => forwardRef(() =>Category))
    category: Category;
  
    constructor();
    constructor(productId: number, productName: string, unitPrice: number, category?: Category);
    constructor(productId?: number, productName?: string, unitPrice?: number, category?: Category) {
      super();
      this.productId = productId;
      this.productName = productName;
      this.unitPrice = unitPrice;
      this.category = category;
      return super.proxify(this);
    }
  }