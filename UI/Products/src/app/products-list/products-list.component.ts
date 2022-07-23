import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { removeProduct } from '../app-state/product.actions';
import { ProductsService } from '../service/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  implements OnInit {

  productsList: Product[] = [];
  displayedColumns: string[] = ['id','name', 'color','delete'];

  constructor(private store:Store,private productsService: ProductsService) { }

     ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAllProducts()
    .subscribe(
      response => {
       this.productsList = response;
      }
    );
  }

   // Deletes product by id
   deleteProduct(id:number){
    const productId= id.toString();
    this.store.dispatch(removeProduct({productId}));
    this.productsService.deleteProduct(id.toString())
    .subscribe(
      response => {
      //  console.log(response);
      this.getAllProducts();
       
      }
    );
  }

}
