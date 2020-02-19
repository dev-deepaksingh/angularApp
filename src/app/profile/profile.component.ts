import { Component, OnInit } from '@angular/core';
import { Routes,Router } from '@angular/router';
import { EditprofileService } from '../service/editprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username;

  constructor(private router: Router, private editprofileService: EditprofileService) { }

  ngOnInit() {
    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    this.username = firstname + ' ' + lastname;
  }

  logoutSession() {
    localStorage.removeItem('employeeid');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.router.navigate(['']);
  }

}
