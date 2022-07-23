import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { getProducts, removeProduct } from '../app-state/product.actions';
import { ProductsService } from '../service/products.service';
import { productSelector } from '../app-state/product.selectors';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppStore, State } from '../app-state/app.state';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent  implements OnInit,OnDestroy {

  _productsList: Product[] = [];
  displayedColumns: string[] = ['id','name', 'color','delete'];

  done = new Subject();

  constructor(private store:Store<AppStore>,private productsService: ProductsService) { }

  ngOnInit(): void {
  // this.getAllProducts();
   this.store.select(productSelector)
   .pipe(
    // tap(data => console.log("tap Products",data)),
    takeUntil(this.done)
    )
    .subscribe((data)=>{
      this._productsList=data;
      console.log("Products",data);
    });
  }

  getAllProducts(){
    this.store.dispatch(getProducts());
    // this.productsService.getAllProducts()
    // .subscribe(
    //   response => {
    //    this.productsList = response;
    //   }
    // );
  }

   // Deletes product by id
   deleteProduct(id:number){
    const productId= id.toString();
    this.store.dispatch(removeProduct({productId}));
    // this.productsService.deleteProduct(id.toString())
    // .subscribe(
    //   response => {
    //   //  console.log(response);
    //   this.getAllProducts();
       
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }

}
