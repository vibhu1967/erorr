import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Company } from './companies/company.model';
import { Product } from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  factories : string;
  products : string;
  editProduct : string;
  imagename:string;
  baseurl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient){}
    

    getAllCompanies(): Observable<any>{
        return this.http.get<Company>(this.baseurl+'/factories/')
    }
    getAllProducts(id: any): Observable<any>{
        return this.http.get<Product>(this.baseurl+'/factories/'+id)
    }
    editProducts(id:any,updatedBody:any): Observable<any>{
      console.log(id)
      console.log(updatedBody)
      return this.http.put(this.baseurl+'/products/'+id,updatedBody);
    }
    addnewProducts(body:any): Observable<any>{
      console.log(body.getAll('file'))
      return this.http.post(this.baseurl+'/products/', body);
      
    }
    deleteProducts(id:any): Observable<any>{
      return this.http.delete(this.baseurl+'/products/'+id);
    }
  sendFactories(data:any){
    this.factories=data;
  }
  receiveFactories(){
    return this.factories;
  }
  sendProducts(data1:any){
    this.products=data1;
  }
  receiveProducts(){
    return this.products;
  }
  setEditProduct(data2:any){
    this.editProduct = data2;
    console.log(this.editProduct);
  }
  getEditProduct(){
    return this.editProduct;
  }
  getName(data3:any){
    this.imagename=data3;
  }

}
