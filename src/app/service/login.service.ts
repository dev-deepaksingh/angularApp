import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

    loginData(uname: string, pwd:string){

      var data1 = {"firstname": uname, "password": pwd};
      var data = JSON.stringify(data1);

      const url ="http://localhost/deepak/src/assets/api/login.php";
      return this.http.post(url,data);
    }

}
