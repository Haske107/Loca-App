import {Http, Response, Headers} from '@angular/http';
import {EventEmitter, Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Prod, Dev} from '../../URLSwitcher';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest} from '@angular/common/http';
import {catchError, last, map, tap} from 'rxjs/operators';

@Injectable()
export class FileService {

    BaseURl = 'http://' + Dev + '/files';
    MainPercentage = new EventEmitter();
    GalleryPercentage = new EventEmitter();

    constructor(private http: HttpClient) {
    }

    // UPLOAD SERVICE FOR MAIN PHOTOS
    uploadMainPhoto(locationID: string, formdata: FormData) {
        // DESCRIBE CONTENT
        const headers = new HttpHeaders({'content': 'FormData'});

        // SET UP TOKEN
        const token = localStorage.getItem('id_token') ? '?token=' + localStorage.getItem('id_token') : '';

        // SET UP REQUEST
        const req = new HttpRequest('POST', this.BaseURl + '/main/' + locationID, formdata, {
            headers: headers,
            reportProgress: true
        });

        // BOMB'S AWAY WITH INTERCEPT
        return this.http.request(req).pipe(
            map(message => this.retrievePercentageMain(message)),
            last(),
        );
    }

    // UPLOAD SERVICE FOR GALLERY PHOTOS
    uploadGalleryPhotos(locationID: string, formdata: FormData)  {
        // DESCRIBE CONTENT
        const headers = new HttpHeaders({'content': 'FormData'});

        // SET UP TOKEN
        const token = localStorage.getItem('id_token') ? '?token=' + localStorage.getItem('id_token') : '';

        // SET UP REQUEST
        const req = new HttpRequest('POST', this.BaseURl + '/gallery/' + locationID, formdata, {
            headers: headers,
            reportProgress: true
        });

        // BOMB'S AWAY
        return this.http.request(req).pipe(
            map(message => this.retrievePercentageGallery(message)),
            last()
        );
    }

    retrievePercentageMain(event)    {
        if (event.type === 1)   {
            const num = event.loaded / event.total * 100;
            console.log('Percent Main:', num);
            this.MainPercentage.emit(num);
            return num;
        }
    }
    retrievePercentageGallery(event)    {
        if (event.type === 1)   {
            const num = event.loaded / event.total * 100;
            console.log('Percent:', num);
            this.GalleryPercentage.emit(num);
            return num;
        }
    }
}
