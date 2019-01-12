import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Agencies } from './agencies';
import { AgenciesDataService } from '../services/agencies-data.service'
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']

})
export class AgencyComponent implements OnInit {

  agencies : Agencies;

  constructor(public agservice: AgenciesDataService) {

  this.agservice.getAgencies().subscribe(
    agencies => {this.agencies.push();});
  

  }


  ngOnInit() {
  }

}