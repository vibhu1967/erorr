import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import {  Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit  {
  form:any;
  redirect:any;
  condition=false;
  
  

  constructor(private api:ServiceService, private router:Router ,private fb:FormBuilder) {
    this.form = this.fb.group({
      identity: ['', [Validators.required]],
      name: [''],
      quantity: [''],
      description: [''],
      image: [''],
    });
  }
  get f() {
    return this.form.controls;
  }
  public image;
  onFileChange(event:any) {
      this.image =<File> event.target.files[0];
      this.condition=true;
      };

  onSubmit() {
    const formData = new FormData();
    if(this.condition==true)
      formData.append('image', this.image);
    else
      formData.append('image',"");
    formData.append('identity', this.form.get('identity').value);
    formData.append('name', this.form.get('name').value);
    formData.append('quantity', this.form.get('quantity').value);
    formData.append('description', this.form.get('description').value);

    this.api.addnewProducts(formData).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['/factories/{{this.redirect.id}}/products']);
      
  }
  ngOnInit(): void {
    this.redirect=this.api.receiveFactories();
   }
}