import { Component, OnInit } from '@angular/core';
import { InsertdataService } from '../../service/insertdata.service';
import { NgForm } from '@angular/forms';
import { Routes,Router } from '@angular/router';
import { ToasterService } from '../../service/toaster-service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  client;
  username;

  constructor(private toasterService: ToasterService,private insertdataService: InsertdataService, private router: Router) { }
  
  ngOnInit() {
    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    this.username = firstname + ' ' + lastname;
  }

  insertData(form: NgForm){
  let data = form.value;
  // console.log(data);
  this.insertdataService.insertData(data).subscribe(
  (data)=> {
  //  this.client.push(data)
    // console.log(data);
  }

  )
        this.toasterService.Success("Successfully Inserted.");
        setTimeout(() => {
        this.router.navigate(['/employee']);
        }, 3000);
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
