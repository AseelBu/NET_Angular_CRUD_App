import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  implements OnInit {

  productsList: Product[] = [];

  constructor(private productsService: ProductsService) { }

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

}
