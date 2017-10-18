import {Location} from "../ts models/location.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileService {

  constructor(private http: Http) { }

  uploadPhoto(locationID: string, formdata: FormData)  {
    const headers = new Headers({
      'content': 'FormData'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.post('http://localhost:3000/files/main/:'+ locationID + token, formdata, {headers: headers} )
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }

  uploadPhotos(locationID: string, formdata: FormData)  {
    const headers = new Headers({
      'content': 'FormData'});
    const token = localStorage.getItem('id_token')
      ? '?token=' + localStorage.getItem('id_token')
      : '';
    return this.http.post('http://localhost:3000/files/other/:'+ locationID + token, formdata, {headers: headers} )
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }

}
