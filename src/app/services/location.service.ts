/**
 * Created by Jeff Haskell on 7/12/2017.
 */
import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Location} from '../ts models/location.model';
import {QueryForm} from '../ts models/queryform.model';
import {Router} from '@angular/router';

import {Prod, Dev} from '../../URLSwitcher';


@Injectable()
export class LocationService    {

  public location: Location;

  constructor(private http: Http, private router: Router) {}


  getLocation(location_id: string) {
    return this.http.get('https://' + Prod + '/location/find?_ID=' + location_id)
        .map((response: Response) =>  {
          const Location = response.json().location;
          console.log(Location);
          return null;
        })
        .catch((error: Response) => Observable.throw(error.json()));
  }
  getLocations() {
    return this.http.get('https://' + Prod + '/location')
      .map((response: Response) => {
        const Locations = response.json().obj;
        const transformedLocations: Location[] = [];
        for (const loca of Locations)  {
          const location: Location = {
            _id: loca._id,
            collections: loca.collections,
            views: loca.views,
            uploadDate: loca.uploadDate,
            user: loca.user,
            address: loca.address,
            coordinates: loca.coordinates,
            name: loca.name,
            description: loca.description,
            rules: loca.rules,
            deposit: loca.deposit,
            rate: loca.rate,
            type: loca.type,
            mainPhoto: loca.mainPhoto,
            otherPhotos: loca.otherPhotos,
            shootPhotos: loca.shootPhotos,
            bathrooms: loca.bathrooms,
            electricity: loca.electricity,
            parkingSpots: loca.parkingSpots,
            deleted: loca.deleted
          };
          transformedLocations.push(location);
        }
        return transformedLocations;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
  saveLocation(location: Location) {
        const body = JSON.stringify(location);
        const headers = new Headers({
            'Content-Type': 'application/json'});
        const token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.post('https://' + Prod + '/location' + token , body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

  getLocationsInRange(DistanceObject: any) {
    const body = DistanceObject;
    return this.http.post('https://' + Prod + '/location/search/', body )
      .map((response: Response) => {
        const Locations = response.json().obj;
        const transformedLocations: Location[] = [];
        for (const loca of Locations)  {
          const location: Location = {
            _id: loca._id,
            collections: loca.collections,
            views: loca.views,
            uploadDate: loca.uploadDate,
            user: loca.user,
            address: loca.address,
            coordinates: loca.coordinates,
            name: loca.name,
            description: loca.description,
            rules: loca.rules,
            deposit: loca.deposit,
            rate: loca.rate,
            type: loca.type,
            mainPhoto: loca.mainPhoto,
            otherPhotos: loca.otherPhotos,
            shootPhotos: loca.shootPhotos,
            bathrooms: loca.bathrooms,
            electricity: loca.electricity,
            parkingSpots: loca.parkingSpots,
            deleted: loca.deleted
          };
          transformedLocations.push(location);
        }
        return transformedLocations;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
  toProfilePage(location: Location) {
      this.location = location;
      localStorage.setItem('currloc', JSON.stringify(location));
      this.router.navigateByUrl('/main/locationprofile');
  }
  getCurrentLocation() {
    return this.location;
  }
}
