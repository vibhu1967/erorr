import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProductComponent } from './product/product.component';
import { NewproductComponent } from './product/newproduct/newproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { ProductdisplayComponent } from './product/productdisplay/productdisplay.component';

import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    ProductComponent,
    NewproductComponent,
    EditproductComponent,
    ProductdisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
