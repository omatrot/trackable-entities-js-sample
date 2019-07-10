import { TrackableEntity } from 'trackable-entities';
import { isReference, autoserializeAs, autoserializeAsArray } from 'dcerialize';

@isReference(true)
export class Category extends TrackableEntity {
  @autoserializeAs(() => Number)
  categoryId: number;
  @autoserializeAs(() => String)
  categoryName: string;
  @autoserializeAsArray(() => Product)
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

export class Product extends TrackableEntity {
  @autoserializeAs(() => Number)
  productId: number;
  @autoserializeAs(() => String)
  productName: string;
  @autoserializeAs(() => Number)
  unitPrice: number;
  @autoserializeAs(() => Number)
  categoryId: number;
  @autoserializeAs(() => Category)
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

