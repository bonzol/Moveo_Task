import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Sort } from '@angular/material/sort';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  public users = new Array();
  public sortedData = new Array();
  public page = NaN;
  
  constructor(private router:Router, private userService:UserService) { }
  
  
  
  ngOnInit(): void {
    
    if(sessionStorage.getItem('page')==undefined) {
      sessionStorage.setItem('page', '1');
    }
    this.page = Number(sessionStorage.getItem('page'));
    this.getUsers(this.page);
    
    
  }
   
  getUsers(page:number) {
    this.userService.getUsers(page).subscribe(
      (data)=>{
        data.results.forEach((person: any) => {
                let user = new User();
                user.fullName = person.name.first+" "+person.name.last;
                user.name = person.name.first.charAt(0)+"."+person.name.last;
                user.email = person.email;
                user.gender = person.gender;
                user.age = person.dob.age;
                user.pic = person.picture.medium;
                user.picBig = person.picture.large;
                user.username = person.login.username;
                user.state = person.location.state;
                user.city = person.location.city;
                user.street = person.location.street.name + " " + person.location.street.number;
                user.lat = parseFloat(person.location.coordinates.latitude) ;
                user.lng = parseFloat(person.location.coordinates.longitude);
                this.users.push(user);
              });
              this.sortedData = this.users.slice();
      },
      (err)=>{
        console.log(err.error);
      }
    );
  }

  newUsers(page:number) {
    sessionStorage.setItem('page',page.toString());
    this.page = page;
    this.users =[];
    this.getUsers(page);
  }
  
  goToPage (page:string) {
    sessionStorage.setItem('page',page);
    this.page = parseInt(page);
    this.users =[];
    this.getUsers(parseInt(page));
  }
  goToUser(user:User) {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(["/"+user.username])
    
  }

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'gender':
          return compare(a.gender, b.gender, isAsc);
        case 'age':
          return compare(a.age, b.age, isAsc);
        default:
          return 0;
      }
    });
  }

  isPageValid() {
    if(this.page === 1) {
      return false;
    } else {
      return true;
    }
  }
  email(e:Event) {
    e.stopPropagation();
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


