import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'https://localhost:7115/api/products'
  constructor(private http : HttpClient) { }

  // Get all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // Get product by id
  getProduct(id:string): Observable<Product> {
    var endpoint = this.baseUrl+'/'+id;
    return this.http.get<Product>(endpoint);
  }

  // update product details
  updateProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product);
  }

  // Delete product by id
  deleteProduct(id: string) {
    var endpoint = this.baseUrl+'/'+id;
    return this.http.delete<Product>(endpoint);
  }
}
