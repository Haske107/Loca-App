import {Location} from '../ts models/location.model';
import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Collection} from '../ts models/collection.model';
import {Prod, Dev} from '../../URLSwitcher';

@Injectable()
export class CollectionService {


  constructor(private http: Http) {}

  // READ
  getPublicCollections() {
    return this.http.get('https://' + Prod +  '/collection/community/')
        .map((response: Response) => {
          const Collections = response.json().obj;
          const transformedCollections: Collection[] = [];
          for (const collection of Collections)  {
             const coll: Collection = {
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
        .catch((error: Response) => Observable.throw(error.json()));
  }
  getPrivateCollections() {
    return this.http.get('https://' + Prod +  '/collection/private/' + localStorage.getItem('userID'))
      .map((response: Response) => {
        const Collections = response.json().obj;
        const transformedCollections: Collection[] = [];
        for (const collection of Collections)  {
          const coll: Collection = {
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
      .catch((error: Response) => Observable.throw(error.json()));
  }
  getCreatedCollections() {
    return this.http.get('https://' + Prod +  '/collection/created/' + localStorage.getItem('userID'))
      .map((response: Response) => {
        const Collections = response.json().obj;
        const transformedCollections: Collection[] = [];
        for (const collection of Collections)  {
          const coll: Collection = {
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
      .catch((error: Response) => Observable.throw(error.json()));
  }
  getCollectionLocations(collectionID: string)  {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.get('https://' + Prod +  '/collection/locations/' + collectionID + token , {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }


  // + / -
  deleteCollection(collectionID: string)  {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.delete('https://' + Prod +  '/collection/remove/' + collectionID + token , {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
  saveCollection(collection: Collection)    {
    const body = JSON.stringify(collection);
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.post('https://' + Prod +  '/collection/' + localStorage.getItem('userID') + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }


  // UPDATES
  updatePublicity(collectionID: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('https://' + Prod +  '/collection/updatePublicity/' + collectionID + token, null,  {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
  updateViewers(collectionID: string) {}
  addLocationToCollection(collectionID: string, location: Location) {
    const body = JSON.stringify(location);
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.patch('https://' + Prod +  '/collection/addLocation/' + collectionID + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
  removeCollectionLocation(collectionID: string, locationIDs: string[])  {
    const body = locationIDs;
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('https://' + Prod +  '/collection/removeLocation/' + collectionID + token , body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => error.json());
  }
  updateName(collectionID: string)  {}
  updateSubtitle(collectionID: string)  {}
  updateViews(collectionID: string) {}
}


