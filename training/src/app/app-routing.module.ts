import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies/companies.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { NewproductComponent } from './product/newproduct/newproduct.component';
import { ProductComponent } from './product/product.component';
import { ProductdisplayComponent } from './product/productdisplay/productdisplay.component';

const routes: Routes = [
  {path:'',redirectTo:'/factories',pathMatch:'full'},

  {path:'factories' , component:CompaniesComponent},
  {path: 'factories/:id/products' , component: ProductComponent,children:[]},
  {path: 'factories/:id/products/addnew',component:NewproductComponent},
  {path:'factories/:id/products/:id/edit',component:EditproductComponent},
  {path:'factories/:id/products/:id/display',component:ProductdisplayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
