import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, scheduled } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../service/products.service';
import * as productActions from './product.actions';

@Injectable()

export class ProductEffects{

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ){}

    getProducts$ = createEffect(()=>
    this.actions$.pipe(
      ofType(productActions.getProducts),
      exhaustMap(()=> 
        this.productsService.getAllProducts()
            .pipe(
                map(products=> {
                    console.log("response:::", products)
                    return productActions.getProductsSuccess({products})
                }),
                catchError((err: any)=> of(productActions.getProductsFailure(err)))
            )
        )  
    )
    );


    editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.editProduct),
      exhaustMap(action => this.productsService.updateProduct(action.product)
      .pipe(
        map(product => productActions.editProductSuccess({product})),
        catchError((err: any) => of(productActions.editProductFailure(err)))
        )
      )
    )
  );

    removeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.removeProduct),
      exhaustMap(({productId}) => this.productsService.deleteProduct(productId)
      .pipe(
          map(()=> productActions.removeProductSuccess({productId})),
          catchError((err: any) => of(productActions.removeProductFailure(err)))
          )
      )
    )
  );

  
}