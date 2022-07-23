
import { createSelector } from "@ngrx/store";
import { Product } from "../models/product.model";
import { AppStore, State } from "./app.state";

export const AppStateSelector =(state: AppStore) => state.Products;
// export const productSelector =(state: AppStore) => state.Products.productsList;

export const productSelector = createSelector(
    AppStateSelector,
     (state: State)=> state.productsList
    // (products: Product[])=> products
);