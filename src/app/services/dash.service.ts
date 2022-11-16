import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  baseUrl = 'election-dev/index.php';
  api_key='StripePaymentDev';
  constructor(private _http: HttpClient) { }

  public dashListData(req : any):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('api-key', this.api_key);
    return this._http.post<any>(`${this.baseUrl}/user/sheetReport`,req,{headers: headers});
  }

  public voter_list(req : any):Observable<any>{
      let headers = new HttpHeaders();
      headers = headers.set('api-key', this.api_key);
      return this._http.post<any>(`${this.baseUrl}/User/sheetVoter2`,req,{headers: headers});
  }

  public voter_list_fillter(req : any):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('api-key', this.api_key);
    return this._http.post<any>(`${this.baseUrl}/User/getLIstBy`,req,{headers: headers});
  }


  public get_group_by_list(req:any):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('api-key', this.api_key);
    return this._http.post<any>(`${this.baseUrl}/User/groupByList`,req,{headers: headers});
  }

}
