import {Product} from "../models/product.model";
import {createReducer, on} from "@ngrx/store";
import * as productActions from './product.actions';
import { State } from "./app.state";




export const initalState: State={
    productsList: [],
    selectedProduct: null,
    deleteProductId:""
}

export const productReducer = createReducer(
    initalState, 

    // Get Products reducers
    // on(productActions.getProducts,(state) => ({...state}) ),
    on(productActions.getProductsSuccess, (state, {productsList}) => ({...state,productsList: [...productsList]})),

    // Update product reducers
    on(productActions.editProductSuccess,(state, {product}) => (
        {...state,
            productsList: state.productsList.map((prod)=> prod.id === product.id? product:prod)
        }
        )),

    // delete product reducers
    on(productActions.removeProductSuccess,(state, {productId}) => (
        {
        ...state,
        productsList: state.productsList.filter((product)=> product.id.toString() !== productId)
        }
    ) ),
    )

   
