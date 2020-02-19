import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../service/fetchdata.service';
import { Routes,Router } from '@angular/router';
import { ToasterService } from '../service/toaster-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  data;
  username;

  constructor(private toasterService: ToasterService,private fetchdataService: FetchdataService, private router: Router) {}
   ngOnInit() {
   this.getData();

    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    this.username = firstname + ' ' + lastname;
   }

  getData(){
   this.fetchdataService.getData().subscribe(
   (data)=>{
   this.data = data;
   }
   )
   }

   
   deleteData(index,employee_id) {
   if(confirm("Are you sure want to delete it.")){
   this.data.splice(index,1)
   this.fetchdataService.deleteData(employee_id).subscribe(
   (data) => {
     if((<any>(data)).status){
       console.log('ok');
       this.toasterService.Error("Successfully Deleted.");
     }else{
       console.log('bad');
     }
   }
   )
   }
   }

   logoutSession() {
     localStorage.removeItem('employeeid');
     localStorage.removeItem('firstname');
     localStorage.removeItem('lastname');
     this.router.navigate(['']);
   }

}
