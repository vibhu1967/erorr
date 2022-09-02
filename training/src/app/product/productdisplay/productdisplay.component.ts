import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  image:any;
  product:any="";
  url='http://127.0.0.1:8000';
  imageURL;
  constructor(private api:ServiceService, private http:HttpClient) { }

  ngOnInit(): void {
    this.product = this.api.receiveProducts();
    console.log(this.product)
    this.imageURL=this.url+this.product.image;
    
  }
  download(){
    this.http.get(this.imageURL,{responseType:'blob'}).subscribe((data:Blob |MediaSource)=>{
      let downloadURL = window.URL.createObjectURL(data)
      saveAs(downloadURL)
    })
  }
 
}

  


