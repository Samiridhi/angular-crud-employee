import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { EditempComponent } from './editemp/editemp.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewempComponent } from './viewemp/viewemp.component';


const routes: Routes = [
  {path:'add', component:AddempComponent,canActivate:[AuthGaurdService]},
  {path:'view', component:ViewempComponent,canActivate:[AuthGaurdService]},
  {path:'edit/:peid', component:EditempComponent,canActivate:[AuthGaurdService]},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
