import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-post-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.css'
})
export class PostProductComponent {
  productList:any []=[];
  apiService:ApiService = inject(ApiService);

  saveProduct(addProduct: NgForm) {
    this.apiService.addProducts(addProduct);
    alert("Record has been added");
    addProduct.reset();
  }


}
