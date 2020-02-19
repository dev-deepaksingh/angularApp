import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { Ng2UploaderModule } from 'ng2-uploader';

import { FetchdataService } from './service/fetchdata.service';
import { InsertdataService } from './service/insertdata.service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app.routing';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditdataService } from './service/editdata.service';
import { LoginService } from './service/login.service';
import { AuthGuard } from './auth/auth.guard';
import { SignupService } from './service/signup.service';
import { ToasterService } from './service/toaster-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatisticsComponent } from './statistics/statistics.component';
import { StaticsService } from './service/statics.service';
import { ChartModule } from 'angular-highcharts';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileService } from './service/editprofile.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    LoginComponent,
    SignupComponent,
    StatisticsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ChartModule
  ],
  providers: [FetchdataService,InsertdataService, EditdataService, LoginService, SignupService, ToasterService, StaticsService,EditprofileService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
