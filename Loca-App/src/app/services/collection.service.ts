import {Location} from "../ts models/location.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Collection} from "../ts models/collection.model";


@Injectable()
export class CollectionService {


  constructor(private http: Http) {}

  //READ
  getPublicCollections() {
    return this.http.get('https://loca-app.herokuapp.com/collection/community/')
        .map((response: Response) => {
          const Collections = response.json().obj;
          let transformedCollections: Collection[] = [];
          for(let collection of Collections)  {
             let coll : Collection = {
              _id: collection._id,
             owner:  collection.owner,
             uploadDate:  collection.uploadDate,
             views:  collection.views,
             locations:  collection.locations,
             name:  collection.name,
               followers: collection.followers,
             subtitle:  collection.subtitle,
             publicity:  collection.publicity,
             userPermission:  collection.userPermission
            };
            transformedCollections.push(coll);
          }
          return transformedCollections;
        })
        .catch((error: Response)=> Observable.throw(error.json()));
  };
  getPrivateCollections() {
    return this.http.get('https://loca-app.herokuapp.com/collection/private/' + localStorage.getItem('userID'))
      .map((response: Response) => {
        const Collections = response.json().obj;
        let transformedCollections: Collection[] = [];
        for(let collection of Collections)  {
          let coll : Collection = {
            _id: collection._id,
            owner:  collection.owner,
            uploadDate:  collection.uploadDate,
            views:  collection.views,
            locations:  collection.locations,
            name:  collection.name,
            followers: collection.followers,
            subtitle:  collection.subtitle,
            publicity:  collection.publicity,
            userPermission:  collection.userPermission
          };
          transformedCollections.push(coll);
        }
        return transformedCollections;
      })
      .catch((error: Response)=> Observable.throw(error.json()));
  };
  getCreatedCollections() {
    return this.http.get('https://loca-app.herokuapp.com/collection/created/' + localStorage.getItem('userID'))
      .map((response: Response) => {
        const Collections = response.json().obj;
        let transformedCollections: Collection[] = [];
        for(let collection of Collections)  {
          let coll : Collection = {
            _id: collection._id,
            owner:  collection.owner,
            uploadDate:  collection.uploadDate,
            views:  collection.views,
            locations:  collection.locations,
            name:  collection.name,
            followers: collection.followers,
            subtitle:  collection.subtitle,
            publicity:  collection.publicity,
            userPermission:  collection.userPermission
          };
          transformedCollections.push(coll);
        }
        return transformedCollections;
      })
      .catch((error: Response)=> Observable.throw(error.json()));
  };
  getCollectionLocations(collectionID: string)  {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.get('https://loca-app.herokuapp.com/collection/locations/' + collectionID + token , {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }


  // + / -
  deleteCollection(collectionID: string)  {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.delete('https://loca-app.herokuapp.com/collection/remove/' + collectionID + token , {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }
  saveCollection(collection: Collection){
    const body = JSON.stringify(collection);
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.post('https://loca-app.herokuapp.com/collection/' + localStorage.getItem('userID') + token, body, {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }


  //UPDATES
  updatePublicity(collectionID: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('https://loca-app.herokuapp.com/collection/updatePublicity/' + collectionID + token, null,  {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }
  updateViewers(collectionID: string){}
  addLocationToCollection(collectionID: string, location: Location) {
    const body = JSON.stringify(location);
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.patch('https://loca-app.herokuapp.com/collection/addLocation/' + collectionID + token, body, {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }
  removeCollectionLocation(collectionID: string, locationIDs: string[])  {
    let body = locationIDs;
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('https://loca-app.herokuapp.com/collection/removeLocation/' + collectionID + token , body, {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> error.json());
  }
  updateName(collectionID: string)  {}
  updateSubtitle(collectionID: string)  {}
  updateViews(collectionID: string){}
}


