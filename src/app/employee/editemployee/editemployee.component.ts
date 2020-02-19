import { Component, OnInit } from '@angular/core';
import { EditdataService } from '../../service/editdata.service';
import { NgForm } from '@angular/forms';
import { Routes,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from '../../service/toaster-service.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee;
  username;

  constructor(private toasterService: ToasterService,private editService: EditdataService, private httpClient: HttpClient, private router: Router) { }

  // Success(){
  //   this.toasterService.Success("Success button clicked");
  // }
  // Info(){
  //   this.toasterService.Info("Info button clicked");
  // }
  // Warning(){
  //   this.toasterService.Warning("Warning button clicked");
  // }
  // Error(){
  //   this.toasterService.Error("Error button clicked");
  // }

  ngOnInit() {
    let employee_id = window.location.pathname.split('/editemployee/')[1];
    this.httpClient.get("http://localhost/deepak/src/assets/api/showeditdata.php?employee_id=" + employee_id).subscribe(
      (data)=>{
        this.employee = data;
      }
    )

    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    this.username = firstname + ' ' + lastname;
  }

  editEmployee(form: NgForm,employee)
  {
    let data = form.value;
    this.editService.editEmployeeData(data).subscribe( data=> {
      if(data == true){
        // alert(data);
        this.toasterService.Success("Successfully Updated.");
        setTimeout(() => {
        this.router.navigate(['/employee']);
        }, 3000);
      }
      }
    )
  }

  onCancel()
  {
    //console.log('cancel');
    this.router.navigate(['/employee']);
  }

  logoutSession(){
    localStorage.removeItem('employeeid');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.router.navigate(['']);
  }

}
