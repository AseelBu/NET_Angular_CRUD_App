import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId="";
  product: Product = {
    id:0,
    name:"",
    color: "",
    price: 0
  };
  constructor(private router:ActivatedRoute
    , private productsService:ProductsService) { }

  ngOnInit() {
    this.productId = this.router.snapshot.params.id.toString();
    this.getProduct(this.productId);
  }

  // populateForm(){
  //   this.product = getProduct();
  // }

  getProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(
      response => {
       console.log(response);
       this.product = response;
      }
    );
  }
}
