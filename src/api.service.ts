import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  productList:any[]=[];

  constructor(public httpClient:HttpClient) { }

  public getProducts():any{
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((response:any):void => {
      this.productList=response;
    });
    return this.productList;
  }
  showMsg():void{
    console.log("Working")
  }
}
