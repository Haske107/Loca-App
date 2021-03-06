import {Location} from '../ts models/location.model';
import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Prod, Dev} from '../../URLSwitcher';


@Injectable()
export class MapService {

  constructor(private http: Http) { }

      geoCode(location: Location)  {
        const headers = new Headers({
          'content': 'FormData'});
        const token = localStorage.getItem('token')
          ? '?token=' + localStorage.getItem('token')
          : '';
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json' +
          '?address=' + location.address.streetAddress +
          ',' + location.address.city +
          ',' + location.address.state +
          '&key=AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI' )
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
      }


    geoCodeRaw(streetAddress: string, city: string, state: string)  {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json' +
            '?address=' + streetAddress +
            ',' + city +
            ',' + state +
            '&key=AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI' )
            .map((response: Response) => response.json())
            .catch((error: Response ) => Observable.throw(error.json()));
    }

    reverseGeoCode(lat: number, lng: number)  {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
            lat + ',' + lng )
            .map((response: Response) => response.json())
            .catch((error: Response ) => Observable.throw(error.json()));
    }
}
