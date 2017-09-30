/**
 * Created by Jeff Haskell on 7/12/2017.
 */
import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {Location} from "../ts models/location.model";
import {QueryForm} from "../ts models/queryform.model";
import {Router} from "@angular/router";

@Injectable()
export class LocationService    {

  public location : Location;

  constructor(private http: Http, private router: Router){}


  //CRD
  getLocations(){
    return this.http.get('https://loca-app.herokuapp.com/location')
      .map((response: Response) => {
        const Locations = response.json().obj;
        let transformedLocations: Location[] = [];
        for(let loca of Locations)  {
          let location : Location = {
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
      .catch((error: Response)=> Observable.throw(error.json()));
  };
  saveLocation(location: Location){
        const body = JSON.stringify(location);
        const headers = new Headers({
            'Content-Type': 'application/json'});
        const token = localStorage.getItem('id_token')
            ? '?token=' + localStorage.getItem('id_token')
            : '';
        return this.http.post('https://loca-app.herokuapp.com/location' + token , body, {headers: headers})
            .map((response: Response)=> response.json())
            .catch((error: Response)=> Observable.throw(error.json()));
    }
  getLocationsInRange(DistanceObject: any) {
    let body = DistanceObject;
    console.log(body);
    return this.http.post('https://loca-app.herokuapp.com/location/search/', body )
      .map((response: Response) => {
        const Locations = response.json().obj;
        let transformedLocations: Location[] = [];
        for(let loca of Locations)  {
          let location : Location = {
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
      .catch((error: Response)=> Observable.throw(error.json()));
  };
  searchLocation(query: QueryForm) {}
  deleteLocation(locationID: string)  {}
  //UPDATES
  updateAddress(locationID: string, newAddress: {
    streetAddress: string,
    city: string,
    state: string,
    zip: string,
    country: string
  })  {}
  updateName(locationID: string, newName: string)  {

  }
  updateDescription(locationID: string, newDescription: string) {

  }
  updateRules(locationID: string, newRules: string[]) {

  }
  updateDeposit(locationID: string, newDeposit: number) {

  }
  updateRate(locationID: string, newRate: number) {

  }
  updateType(locationID: string, newType: string) {

  }
  updateBathrooms(locationID: string, newBathrooms: number) {

  }
  updateElectricity(locationID: string, newElectricity: boolean)  {

  }
  updateParkingSpots(locationID: string, newPakringSpots: number) {

  }
  //
  toProfilePage(location: Location) {
    this.location = location;
    this.router.navigateByUrl('/main/locationprofile');
  }
  getCurrentLocation() {
    return this.location;
  }
}
