import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';

import { SearchbyPipe } from './searchby.pipe';
import { EditempComponent } from './editemp/editemp.component';
import { ViewbyidComponent } from './viewbyid/viewbyid.component';
import { HttpClientModule } from "@angular/common/http";

import { Ng2SearchPipeModule  } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { SingleEmployeeDetailsComponent } from './single-employee-details/single-employee-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ViewempComponent,
    SearchbyPipe,
    EditempComponent,
    ViewbyidComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    SingleEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
