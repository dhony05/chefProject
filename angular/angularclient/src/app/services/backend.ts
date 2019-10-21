import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root' // will be provided for all
})
export class BackEndService {
  baseUrl: string;
  chefExt: string;
  userExt: string;

  // chefsPresent: boolean;
  chefs;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/api";
    this.chefExt = "/chefs";
    this.userExt = "/users";
  }
  requestChefs() {
    // retrieves all chefs in database

    // this.chefsPresent = false;
    this.http.get<ChefResponse[]>(this.baseUrl + this.chefExt)
    .subscribe( result => {
      // this.chefsPresent = true;
      this.chefs = result;
    });
  }
  requestChef(id) {
    // changes chef in chefs when retrieved from the database
    this.http.get<ChefResponse>(this.baseUrl + this.chefExt + id)
    .subscribe( result => {
      let index = this.chefs.indexOf(this.chefs.filter(chef => {chef.id == result.id}));
      if (~index) { // notify needed
        this.chefs[index] = result;
      }
    });
  }
  requestNewChef(chef: ChefRequest) {
    // send post to db
  }
  requestChefChange(chef: ChefRequest) {
    // send put to db
  }
  requestChefRemove(id) {
    // send delete to db
  }
  getChefs() {
    // get all chefs cached
    return this.chefs;
  }
  getChef(id) {
    // get particular chef
    return this.chefs.filter(chef => chef.id == id);
  }
  getBlankChef(id: number,
  firstName: string,
  lastName: string,
  address: string) {
    // container for change in the format to be submitted
    return new ChefRequest(id, firstName, lastName, address);
  }
}

export class ChefRequest {
  // formatted data to send to database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}
export interface ChefResponse {
  // expected data from the database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
}
export class UserRequest {
  // formatted data to send to database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.password = password;
  }
}
export interface UserResponse {
  // expected data from the database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}
