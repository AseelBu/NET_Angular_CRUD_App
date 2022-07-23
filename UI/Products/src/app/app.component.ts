import { Component, OnInit } from '@angular/core';
import { getProducts} from './app-state/product.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Products';
  
  constructor(private readonly store:Store){}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.store.dispatch(getProducts());
  }
}
