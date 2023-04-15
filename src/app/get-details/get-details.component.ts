import { Component, OnInit } from '@angular/core';
import { CredServiceService } from '../cred-service.service';
@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent  implements OnInit{
          
    message : String = ""
    showTable : boolean  = false
    creds : any[]  = []
     
     constructor(private credService : CredServiceService){

     }


  ngOnInit(): void {
       this.getCreds()
  }

     onSubmit(form:any){
      this.showTable = false;
             const {name , pass} = form.value

              if(name == "Soumyadeep Das" && pass == "Panku123456"){
                   this.message = "Login Successfull"
                   this.showTable  = true;
              }else {
                this.message = "Wrong Credentials"
                 this.showTable = false;
              }
             
     }

     getCreds(){
          this.credService.getCreds().subscribe(data=>{
             this.creds  = data
          })
     }

     logout(){
       this.showTable = false
       this.message = "Logout Successfull"
     }
   
}
