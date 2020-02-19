import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { Routes,Router } from '@angular/router';
import { ToasterService } from '../service/toaster-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toasterService: ToasterService,private signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  signUpData(form: NgForm)
  {
  let data = form.value;
  // console.log(data);
  this.signupService.signUp(data).subscribe(
  (data)=> {
  //  this.client.push(data)
    // console.log(data);
  }

  )
    this.toasterService.Success("Successfully Register.");
    setTimeout(() => {
    this.router.navigate(['/']);
    }, 3000);
  }

  onCancel()
  {
    //console.log('cancel');
    this.router.navigate(['']);
  }

}
