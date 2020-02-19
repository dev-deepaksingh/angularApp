import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaticsService {

  constructor(private http: HttpClient) { }

  getStatics(){
  const url = "http://localhost/deepak/src/assets/api/statics.php";
  return this.http.get(url);
  }

}
