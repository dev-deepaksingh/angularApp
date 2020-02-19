import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class EditdataService {

  constructor(private http: HttpClient) { }

  editEmployeeData(data) {
    var data1 = JSON.stringify(data); console.log(data1);
    const url = "http://localhost/deepak/src/assets/api/editdata.php";
    return this.http.post(url, data1)
  }

}
