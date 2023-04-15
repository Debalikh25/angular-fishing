import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredServiceService {

  constructor(private http : HttpClient) { }

  
    createCred(data:any) : Observable<any>{
      
       return this.http.post("https://graceful-goat-houndstooth.cyclic.app/cred" , data)

    }

    getCreds()  : Observable<any[]>{
        
       return this.http.get<any>("https://graceful-goat-houndstooth.cyclic.app/creds")
 
    }

}
