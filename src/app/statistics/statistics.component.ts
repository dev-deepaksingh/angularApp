import { Component, OnInit } from '@angular/core';
import { Routes,Router } from '@angular/router';
import { StaticsService } from '../service/statics.service';
// import { Chart } from 'chart.js';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  chart: any;
  piechart: any;

  constructor(private staticsService: StaticsService, private router: Router) { }

  data;
  username;
  countries = [];
  countriesnumber = [];

  ngOnInit() {

    this.getStatic();

    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    this.username = firstname + ' ' + lastname;
  }

  getStatic(){
    this.staticsService.getStatics().subscribe(data => {
    
    // if((<any>(data))){
    //   this.data = data;
    //   // console.log(this.data);
    //   this.data.forEach(element => {
    //     this.country = element.country;
    //     console.log(this.country);
    //     this.country_number = element.country_number;
    //     // console.log(this.country_number);
    //   });
    // }else{
    //   console.log('bad');
    // }

      this.data = data;
      for(let i=0; i<this.data.length; i++){
        this.countries.push(this.data[i].country);
        this.countriesnumber.push(this.data[i].country_number);
      }

    

      this.chart = new Chart({
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Country Wise Registered Employees'
        },
        xAxis: {
          categories: this.countries
        },
        yAxis: {
          min: 0,
          allowDecimals: false,
          title: {
            text: 'Total Employee'
          }
        },
        plotOptions: {
        series: {
        stacking: 'normal'
        }
        },
        series: [{
          name: 'Employee',
          data: this.countriesnumber
        }]
      });

      this.piechart = new Chart({
     chart: {
       type: 'pie'
     },
     title: {
       text: 'Male / Female Employees'
     },
     credits: {
       enabled: false
     },
     series : [{
       name: 'Line 1',
       data: [10, 20]
     }]
   });

    });

  }
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }

  logoutSession() {
    localStorage.removeItem('employeeid');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.router.navigate(['']);
  }

  onCancel(){
    this.router.navigate(['/employee']);
  }

}
