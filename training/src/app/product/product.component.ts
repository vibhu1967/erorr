import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  factory:any = "";
  
  products:Product[] = [];
  constructor(private api:ServiceService ,private router:Router
   ) { }
 

  ngOnInit(){
    this.factory = this.api.receiveFactories();
    this.getProductList(this.factory.id);
     
  }
  getProductList(message: any){
    this.api.getAllProducts(message).subscribe(data => {
      
      this.products = data;
      
      console.log(this.products)
    })
  }
  Send(data:any){
    this.api.sendProducts(data)
  }
  Image(data:any){
    this.api.getName(data);
    console.log(data);
  }
  Send1(data:any){
    this.api.setEditProduct(data)
  }
  deleteProduct(id:string){
    this.api.deleteProducts(id).subscribe();
    this.api.getAllProducts(this.factory.id).subscribe(data => {
      this.products = data;
      console.log(this.products)
  })
  
}
 back(){
  this.router.navigate(['/factories/'])
 }
}
