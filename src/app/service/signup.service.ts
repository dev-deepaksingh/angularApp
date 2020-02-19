import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(data){ 
    var data1 = JSON.stringify(data);
    const url ="http://localhost/deepak/src/assets/api/signup.php";
    return this.http.post(url,data1);
  }

}
