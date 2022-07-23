import { Product } from "../models/product.model";

     
export interface State {
    productsList: Product[];
    selectedProduct?: Product|null;
    deleteProductId?: string;
  }

  export interface AppStore {
    Products:State;
  }

