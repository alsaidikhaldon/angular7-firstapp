import { Injectable } from '@angular/core';
import { Agencies } from '../agency/agencies';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class AgenciesDataService {

  private _url: string= "http://localhost:3000/agencies" ;
 // private _url: string= "https://jsonplaceholder.typicode.com/users" ;

  constructor(public http:HttpClient) {

   }


  getAgencies() :Observable<[Agencies]> { 
    return this.http.get<[Agencies]>(this._url);
  
  }
}

// : Observable<[Agencies]>
// : Agencies[] {
//   return [
//     {
//       agencyName: "blala agency",
//       logo: "link",
//       disc: "this is our test agency discreption this is our test agency discreption",
//       city: "tunis",
//       carsnum: 25,
//       carsinRent: 8,
//       crationdate: "2018/11/02"
//     },
//     {
//       agencyName: "fast cars",
//       logo: "link",
//       disc: "this is our test agency discreption this is our test agency discreption",
//       city: "paris",
//       carsnum: 11,
//       carsinRent: 2,
//       crationdate: "2017/04/02"
//     }
//    ]; 
// }

