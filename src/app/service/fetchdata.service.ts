import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FetchdataService {

  constructor(private http: HttpClient) { }
    
    getData(){
    const url = "http://localhost/deepak/src/assets/api/showdata.php";
    return this.http.get(url);
    }

    deleteData(employee_id){ 
    const url= "http://localhost/deepak/src/assets/api/delete.php";
    return this.http.post(url, employee_id);
    }
}
