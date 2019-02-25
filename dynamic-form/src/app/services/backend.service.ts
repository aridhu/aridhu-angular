import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient:HttpClient ) { }

  public getFormDefinition(filename: string): Observable<any> {
    return this.httpClient.get("./assets/"+filename+".json");
  }

  
}
