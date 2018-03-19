import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {City} from '../ts models/city.model';
import {Dev, Prod} from '../../URLSwitcher';

@Injectable()
export class CityService {

    constructor(private http: Http) {}

    selectedCity: City;

    saveCity(city: City) {
        const body = JSON.stringify(city);
        const headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http.post('http://' + Prod +'/city/save' , body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getCity(name: string) {
        const body = name;
        const headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http.get('http://' + Prod +'/city/getCity/' + body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getCities() {
        const headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http.get('http://' + Prod +'/city/getAll' )
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
