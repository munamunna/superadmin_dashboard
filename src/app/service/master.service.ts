import { Injectable } from '@angular/core';
import { User } from '../model/users';
import { HttpClient } from '@angular/common/http';
import { APIResponsemodel } from '../model/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:string ='http://127.0.0.1:8000/api/';
  constructor(private http:HttpClient) { 
  
}

registernewUser(obj:User):Observable< APIResponsemodel>{
    
  return this.http.post<APIResponsemodel>(this.apiUrl+"users/",obj)
}



listusers():Observable<APIResponsemodel>{
  return this.http.get<APIResponsemodel>(this.apiUrl+"user-list/")
}


}