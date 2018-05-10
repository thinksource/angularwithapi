import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Feature } from '../feature';
import { Http, RequestOptionsArgs, RequestMethod } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikewiseService {
  
  private url = 'https://bikewise.org:443/api/v2/incidents';
  searchEvent: EventEmitter<Feature[]> = new EventEmitter();
  typeEvent: EventEmitter<String> = new EventEmitter();
  constructor(private http: HttpClient) { }
  getIncidents(type:string, location:string) {
    let myparams = new HttpParams();
    if (type != "") myparams=myparams.append("incident_type", type);
    if (location != "") myparams=myparams.append("proximity", location);
    myparams=myparams.append("page", String(1));
    myparams=myparams.append("proximity_square", String(100));
    myparams=myparams.append("per_page", String(50));
    console.log(myparams.toString());
    return this.http.get(this.url, { params: myparams, responseType: 'json' })
      .pipe(map(res => res['incidents']));
  }
}
