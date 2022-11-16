import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'election-dev/index.php';
  api_key='StripePaymentDev';
  constructor(private _http: HttpClient) { }
  
  isLogedIn(): boolean {
    if (localStorage.getItem('login')) {
      return true;
    }
    return false;
  }

  getLoggedInUser():any|undefined{
    let loginRes = localStorage.getItem('login');
    if(loginRes && loginRes!==null&&loginRes!==''){
      try{
        return JSON.parse(loginRes);
      } catch(error){
        return undefined;
      }
    }
    return undefined;
  }

  tset(){
    return this._http.get<any>('https://cashlepaymentbank.com/api.php');
  }
  public postLogin(req : any):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('api-key', this.api_key);
    return this._http.post<any>(`${this.baseUrl}/User/sheetLogin`,req,{headers: headers});
  }
  public postuserdata(req : any,token:any):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('api-key', this.api_key).set('access-token', token);
    return this._http.post<any>(`${this.baseUrl}/User/sheetLogin`,req,{headers: headers});
  }
}
