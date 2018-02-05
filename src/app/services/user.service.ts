import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Prod, Dev} from '../../URLSwitcher';


@Injectable()
export class UserService {
  constructor( private http: Http ) {}

  getUser( userID: string ) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get( 'https://' + Dev +  '/user/getUserByID/' + userID, {headers: headers} )
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
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
  getUsersByLocation(locationIDs: string[]) {

  }
}
