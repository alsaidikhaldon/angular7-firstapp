import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Agencies } from './agencies';
import { AgenciesDataService } from '../services/agencies-data.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
  providers: [AgenciesDataService]

})
export class AgencyComponent implements OnInit {

  agencies: Agencies[];
  dataag: any;
  looptime: number;
  constructor(private agservice: AgenciesDataService) {

    this.looptime = 4;
    this.agservice.getAgencies()
      .subscribe(resu => this.agencies = resu);


    console.log('this is result ' + this.agencies);

  }


  ngOnInit() {

  }

}