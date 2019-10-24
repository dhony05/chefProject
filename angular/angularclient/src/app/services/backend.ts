import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface BackEndMenu {
  // Update Cached Data For Chefs
  requestChefs(); // retrieves all chefs in database
  requestChef(id); // changes chef in chefs when retrieved from the database
  requestNewChef(chef: ChefRequest); // send post to db
  requestChefChange(chef: ChefRequest); // send put to db
  requestChefRemove(id); // send delete to db
  // Access Cached Data For Chefs
  getChefs(); // get all chefs cached
  getChef(id); // get particular chef
  getBlankChef(id: number, firstName: string, lastName: string, address: string,
    pictureUrl: string, age: number, description: string, price: number,
    phone_number: number, email: string, categories: string[]);
  // ^^^ container for change in the format to be submitted

  // Update Cached Data For Users
  // requestUsers(); // retrieves all users in database
  requestUser(id); // changes user in users when retrieved from the database
  requestNewUser(user: UserRequest); // send post to db
  requestUserChange(user: UserRequest); // send put to db
  requestUserRemove(id); // send delete to db
  // Access Cached Data For Users
  // getUsers(); // get all users cached
  getUser(); // get particular user
  getBlankUser(id: number, firstName: string, lastName: string, 
    address: string, email: string, password: string, pictureUrl: string);
  // ^^^ container for change in the format to be submitted

  // Update Cached Data for Concerns
  requestConcerns(); // retrieves all concerns in database
  requestConcern(id); // changes concern in concerns when retrieved from the database
  requestNewConcern(concern: ConcernRequest); // send post to db
  requestConcernChange(concern: ConcernRequest); // send put to db
  requestConcernRemove(id); // send delete to db
  // Access Cached Data For Concerns
  getConcerns(); // get all concerns cached
  getConcern(id); // get particular concern
  getBlankConcern(id: number, email: string, name: string, description: string);
  // ^^^ container for change in the format to be submitted
}

@Injectable({
  providedIn: 'root' // will be provided for all
})
export class BackEndService implements BackEndMenu {
  baseUrl: string;
  chefExt: string;
  userExt: string;
  concernExt: string;
  httpOptions;

  // chefsPresent: boolean;
  chefs;
  user;
  userError;
  concerns;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/api";
    this.chefExt = "/chefs";
    this.userExt = "/users";
    this.concernExt = "/concerns";
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.chefs = [];
    this.requestChefs(); // init load?
    this.user = null; // needed?
    this.userError = undefined; // needed?
    this.concerns = [];
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
    this.http.get<ChefResponse>(this.baseUrl + this.chefExt + "/" + id)
    .subscribe( result => {
      let index = this.chefs.indexOf(this.chefs.filter(chef => {chef.id == result.id}));
      if (~index) { // notify needed
        this.chefs[index] = result;
      }
    });
  }
  requestNewChef(chef: ChefRequest) {
    // send post to db
    this.http.post<ChefResponse>(this.baseUrl + this.chefExt,
                                chef,
                                this.httpOptions)
    .subscribe( result => { this.requestChefs() });
  }
  requestChefChange(chef: ChefRequest) {
    // send put to db
    this.http.put<ChefResponse>(this.baseUrl + this.chefExt,
                                chef,
                                this.httpOptions)
    .subscribe( result => { this.requestChefs() });
  }
  requestChefRemove(id) {
    // send delete to db
    this.http.delete(this.baseUrl + this.chefExt + "/" + id)
    .subscribe( result => { this.requestChefs() });
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
  address: string,
  pictureUrl: string,
  age: number,
  description: string,
  price: number,
  phone_number: number,
  email: string,
  categories: string[]
  ) {
    // container for change in the format to be submitted
    return new ChefRequest(id, firstName, lastName, address, pictureUrl, age, description,
    price, phone_number, email, categories);
  }



  requestUser(id) {
    // changes user in users when retrieved from the database
    this.http.get<UserResponse>(this.baseUrl + this.userExt + "/" + id)
    .subscribe( result => {
      this.user = result;
    });
  }
  requestNewUser(user: UserRequest) {
    // send post to db
    this.http.post<UserResponse>(this.baseUrl + this.userExt,
                                user,
                                this.httpOptions)
    .subscribe( result => { this.requestUser(user.id) },
                err => {this.userError = err; });
  }
  requestUserChange(user: UserRequest) {
    // send put to db
    this.http.put<UserResponse>(this.baseUrl + this.userExt,
                                user,
                                this.httpOptions)
    .subscribe( result => { this.requestUser(user.id) });
  }
  requestUserRemove(id) {
    // send delete to db
    this.http.delete(this.baseUrl + this.userExt + "/" + id)
    .subscribe( result => {});
  }
  getUser() {
    // get all users cached
    return this.user;
  }
  getBlankUser(id: number,
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  password: string,
  pictureUrl: string
  ) {
    // container for change in the format to be submitted
    return new UserRequest(id, firstName, lastName, address, email, password, pictureUrl);
  }

  requestConcerns() {
    // retrieves all concerns in database

    this.http.get<ConcernResponse[]>(this.baseUrl + this.concernExt)
    .subscribe( result => {
      this.concerns = result;
    });
  }
  requestConcern(id) {
    // changes concern in concerns when retrieved from the database
    this.http.get<ConcernResponse>(this.baseUrl + this.concernExt + "/" + id)
    .subscribe( result => {
      let index = this.concerns.indexOf(this.concerns.filter(concern => {concern.id == result.id}));
      if (~index) { // notify needed
        this.concerns[index] = result;
      }
    });
  }
  requestNewConcern(concern: ConcernRequest) {
    // send post to db
    this.http.post<ConcernResponse>(this.baseUrl + this.concernExt,
                                concern,
                                this.httpOptions)
    .subscribe( result => { this.requestConcerns() });
  }
  requestConcernChange(concern: ConcernRequest) {
    // send put to db
    this.http.put<ConcernResponse>(this.baseUrl + this.concernExt,
                                concern,
                                this.httpOptions)
    .subscribe( result => { this.requestConcerns() });
  }
  requestConcernRemove(id) {
    // send delete to db
    this.http.delete(this.baseUrl + this.concernExt + "/" + id)
    .subscribe( result => { this.requestConcerns() });
  }
  getConcerns() {
    // get all concerns cached
    return this.concerns;
  }
  getConcern(id) {
    // get particular concern
    return this.concerns.filter(concern => concern.id == id);
  }
  getBlankConcern(
    id: number,
    email: string,
    name: string,
    description: string
  ) {
    // container for change in the format to be submitted
    return new ConcernRequest(id, email, name, description);
  }


}

export class ChefRequest {
  // formatted data to send to database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  pictureUrl: string;
  age: number;
  description: string;
  price: number;
  phone_number: number;
  email: string;
  categories: string[];
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    pictureUrl: string,
    age: number,
    description: string,
    price: number,
    phone_number: number,
    email: string,
    categories: string[]
    ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.pictureUrl = pictureUrl;
    this.age = age;
    this.description = description;
    this.price = price;
    this.phone_number = phone_number;
    this.email = email;
    this.categories = categories;
  }
}
export interface ChefResponse {
  // expected data from the database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  pictureUrl: string;
  age: number;
  description: string;
  price: number;
  phone_number: number;
  email: string;
  categories: string[];
}
export class UserRequest {
  // formatted data to send to database
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
  pictureUrl: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string,
    pictureUrl: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.password = password;
    this.pictureUrl = pictureUrl;
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
  pictureUrl: string;

}
export class ConcernRequest {
  id: number;
  email: string;
  name: string;
  description: string;
  constructor(
    id: number,
    email: string,
    name: string,
    description: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.description = description;
  }
}
export interface ConcernResponse {
  id: number;
  email: string;
  name: string;
  description: string;
}
