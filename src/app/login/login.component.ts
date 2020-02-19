import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { ToasterService } from '../service/toaster-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee;

  msg;

  constructor(private toasterService: ToasterService,private loginService : LoginService,private router : Router) { }

  ngOnInit() {
  }

 OnSubmit(firstname: string, password : string)
  {

    this.loginService.loginData(firstname, password).subscribe(data=> {
      
        if(((<any>data).status)){
          console.log('ok');
          localStorage.setItem('employeeid', (<any>data).employee_id);
          localStorage.setItem('firstname', (<any>data).first_name);
          localStorage.setItem('lastname', (<any>data).last_name);
          this.toasterService.Success("Successfully Logged In.");
          setTimeout(() => {
          this.router.navigate(['/employee']);
        }, 3000);
        }else{
          console.log('bad');
          // this.msg ='Invalid username or password';
          this.toasterService.Error("Invalid username or password.");
        }

      }
    
      )
  }
  

}
