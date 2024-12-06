import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
productList:any[]=[];

  constructor(public httpClient:HttpClient) { }

  public getProducts():any[]{
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((response:any):void => {
      this.productList=response;
    });
    return this.productList;
  }

  public addProducts(addProduct:NgForm):any{
     this.httpClient.post('https://jsonplaceholder.typicode.com/posts',addProduct.value).subscribe((response: any) => {
       console.log(response);
     });
  }

  public viewProducts():any[]{
     this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((response:any) => {
      this.productList=response;
    });
     return this.productList;
  }

  showMsg():void{
    console.log("Working")
  }
}
