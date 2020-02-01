import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  constructor(private http: HttpClient, private router: Router) { }
  totalColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'action'];
  displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  //displayedColumns: any[] = [{'checked':true,value:'id'},{'checked':true,value:'first_name'},{'checked':true,value:'last_name'}];
  baseUrl = "https://reqres.in/api/";
  error: string;
  addElement(element) {
    //this.ELEMENT_DATA.push(element);
    this.http.post(this.baseUrl + "register", element).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  login(user) {
    return this.http.post(this.baseUrl + "login", user);
  }

  getElements() {
    return this.http.get(`${this.baseUrl}users`).pipe(
      map((response: any) => {
        const { data, ...pagination } = response;
        return { data, pagination };
      })
    );
  }

  getData()
  {
    //return this.http.get("https://reqres.in/api/users");
    return this.http.get('http://feeds.citibikenyc.com/stations/stations.json');
  }
}

