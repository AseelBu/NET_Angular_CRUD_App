import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId="";
  product: Product; 

  productDetailsForm = this.FB.group({
    "product-id":[{value: "",disabled:true}, Validators.required],
    "product-name": ["", Validators.required],
    "product-color": ["", Validators.required],
    "product-price": ["", [Validators.required,Validators.min(0)]]
  })  

  showCheck = false;


  constructor(
    private router:ActivatedRoute, 
    private productsService:ProductsService, 
    private FB:FormBuilder) { }

  ngOnInit() {
    this.productId = this.router.snapshot.params.id.toString();
    this.getProduct(this.productId);
  }

// Retrives product details by id
  getProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(
      (response:Product) => {
      //  console.log(response);
       this.product = response;
       this.populateForm();
      },
      (err:any)=> console.log(err)
    );
  }

  populateForm(){
    this.productDetailsForm.setValue({
      "product-id":this.product.id.toString(),
      "product-name": this.product.name,
      "product-color": this.product.color,
      "product-price": this.product.price.toString()
    });
  }

  // Updates product details
  onSubmit(){

    // update product by form values
    this.mapFormValuesToProductModel();

    console.log(this.product);

    this.productsService.updateProduct(this.product)
    .subscribe(
      response => {
        console.log(response);
        this.showCheck=true;
        setTimeout(()=>{this.showCheck=false},5000);
      }
    )
    
  }

  mapFormValuesToProductModel(){
  this.product.name = this.productDetailsForm.value["product-name"];
  this.product.color = this.productDetailsForm.value["product-color"];
  this.product.price = this.productDetailsForm.value["product-price"];

  }
}
