/**
 * Created by Jeff Haskell on 7/12/2017.
 */
import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Location} from '../ts models/location.model';
import {Router} from '@angular/router';
import {Prod, Dev} from '../../URLSwitcher';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {catchError, last, map, tap} from 'rxjs/operators';


@Injectable()
export class LocationService    {

  public location: Location;
  public locations: Location[];

  BaseURl = 'http://' + Dev + '/location';

  constructor(private http: HttpClient, private router: Router) {}

  saveLocation(location: Location): Observable<any>  {
      // SET ID TOKEN
        const token = localStorage.getItem('id_token') ? '?token=' + localStorage.getItem('id_token') : '';

      // SET UP THE REQUEST AND SEND
      return this.http.post(this.BaseURl + token, location).pipe();
  }

  getLocationsInRange(DistanceObject: any) {
      // SET UP THE REQUEST
      const req = new HttpRequest('POST', this.BaseURl + '/search', DistanceObject);

      // SEND WITH INTERCEPT CAPABILITY
      return this.http.request(req).pipe(
          // FORMAT RESPONSE
          map(response => this.formatLocationArray(response))
      );
  }


  toProfilePage(location: Location) {
      this.location = location;
      localStorage.setItem('currloc', JSON.stringify(location));
      this.router.navigateByUrl('/main/locationprofile');
  }

  formatLocationArray(event: HttpEvent<any>) {
      if (event.type === HttpEventType.Response) {
          this.locations = [];
          event.body.obj.forEach(location => {
              this.locations.push(location);
          });
          return this.locations;
      }
  }
}
