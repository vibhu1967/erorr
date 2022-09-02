import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  editProduct:any;
  redirect:any="";
  form:any;
  url='http://127.0.0.1:8000';
  imageURL;
  
 
 

  constructor(private api:ServiceService,private router:Router,private fb:FormBuilder) { 
    this.form = this.fb.group({
      identity: ['', [Validators.required]],
      name: [''],
      quantity: [''],
      description: [''],
      image: [''],
    });
  }
  public image;
  onFileChange(event:any) {
      this.image =<File> event.target.files[0];
      console.log(this.image)
      };
      
      
  
  
  onSubmit() {
    const formData = new FormData();
    if(this.editProduct.image==null){
      formData.append('image', this.image);
      formData.append('identity', this.editProduct.identity);
      formData.append('name', this.form.get('name').value);
      formData.append('quantity', this.form.get('quantity').value);
      formData.append('description', this.form.get('description').value);
    }
      
      
    else
      formData.append('identity', this.editProduct.identity);
      formData.append('name', this.form.get('name').value);
      formData.append('quantity', this.form.get('quantity').value);
      formData.append('description', this.form.get('description').value);
     
    

    this.api.editProducts(this.editProduct.id,formData).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['/factories/{{this.redirect.id}}/products']);
      
  }
  

  ngOnInit(): void {
    this.editProduct=this.api.getEditProduct();
    console.log(this.editProduct)
    this.imageURL=this.url+this.editProduct.image;
    this.redirect=this.api.receiveFactories();
  }

 

}

