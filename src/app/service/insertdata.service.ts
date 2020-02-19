import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InsertdataService {

  constructor(private http: HttpClient) { }

  insertData(data){ 
    var data1 = JSON.stringify(data);
    const url ="http://localhost/deepak/src/assets/api/insertdata.php";
    return this.http.post(url,data1);
  }

}
