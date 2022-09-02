import { Component, OnInit } from '@angular/core';

import { Company } from './company.model';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
 
})
export class CompaniesComponent implements OnInit {
  companies : Company[] = [] ;

 

  constructor(private api:ServiceService) { 
  }

  

  ngOnInit() {
    this.fetchCompanies();
  }
  fetchCompanies = () => {
    this.api.getAllCompanies().subscribe(
      data => {
        this.companies = data;
      }
    ) 
  }

  Send(data:any){
    this.api.sendFactories(data);
  }
}


