import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDetailsComponent } from './get-details/get-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [


  {
   
    path : "dhaikiri" , component : GetDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
