import {Product} from "../models/product.model";
import {createAction, props} from "@ngrx/store";

//Action names
export const GET_PRODUCTS = '[Product] Get Products';
export const GET_PRODUCTS_SUCCESS = '[Product] Get Products Success';
export const GET_PRODUCTS_FAILUR = '[Product] Get Products Failure';

export const EDIT_PRODUCT = '[Product] Edit Product';
export const EDIT_PRODUCT_SUCCESS = '[Product] Edit Product Success';
export const EDIT_PRODUCT_FAILUR = '[Product] Edit Product Failure';

export const REMOVE_PRODUCT = '[Product] Remove Product';
export const REMOVE_PRODUCT_SUCCESS = '[Product] Remove Product Success';
export const REMOVE_PRODUCT_FAILUR = '[Product] Remove Product Failure';


//Actions creation
// get products
export const getProducts = createAction(GET_PRODUCTS);

export const getProductsSuccess = createAction(
    GET_PRODUCTS_SUCCESS,
    props<{ productsList: Product[]}>()
    );

export const getProductsFailure = createAction(
    GET_PRODUCTS_FAILUR,
    props<any>()
    );


// update product
export const editProduct = createAction(
    EDIT_PRODUCT,
    props<{product: Product}>()
    );

export const editProductSuccess = createAction(
    EDIT_PRODUCT_SUCCESS, 
    props<{product: Product}>()
    );

export const editProductFailure = createAction(
    EDIT_PRODUCT_FAILUR, 
    props<any>()
    );


// remove product
export const removeProduct = createAction(
    REMOVE_PRODUCT, 
    props<{productId: string}>()
    );

export const removeProductSuccess = createAction(
    REMOVE_PRODUCT_SUCCESS, 
    props<{productId: string}>()
    );

export const removeProductFailure = createAction(
    REMOVE_PRODUCT_FAILUR, 
    props<any>()
    );