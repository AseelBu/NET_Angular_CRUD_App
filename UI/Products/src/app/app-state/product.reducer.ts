import {Product} from "../models/product.model";
import {createReducer, on} from "@ngrx/store";
import * as productActions from './product.actions';


export interface State {
    products: Product[];
    selectedProduct?: Product|null;
    deleteProductId?: string;
  }

export const initalState: State={
    products: [],
    selectedProduct: null,
    deleteProductId:""
}

export const productReducer = createReducer(
    initalState, 

    // Get Products reducers
    // on(productActions.getProducts,(state) => ({...state}) ),
    on(productActions.getProductsSuccess, (state, {products}) => ({...state,products: [...products]})),

    // Update product reducers
    on(productActions.editProductSuccess,(state, {product}) => (
        {...state,
            products: state.products.map((prod)=> prod.id === product.id? product:prod)
        }
        )),

    // delete product reducers
    on(productActions.removeProductSuccess,(state, {productId}) => (
        {
        ...state,
        products: state.products.filter((product)=> product.id.toString() !== productId)
        }
    ) ),
    )

   
