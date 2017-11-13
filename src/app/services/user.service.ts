import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {User} from "../ts models/user.model";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  constructor( private http: Http ) {}
  getUser( userID: string ) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get( "http://localhost:3000/user/getUserByID/" + userID, {headers: headers} )
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }
  getUsers(userIDs: string[]) {

  }
  getUserByEmail(userEmail: string) {

  }
  getUsersByEmail(userEmails: string[])  {

  }
  getUserByUsername(userUsername: string) {

  }
  getUsersByUsername(userUsernames: string[]) {

  }
  getUserByLocation(locationID: string) {

  }
  getUsersByLocation(locationIDs: string[]){

  }
}
