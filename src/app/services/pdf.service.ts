import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class PdfService {

  constructor(private http: Http) { }


  getAgreement1() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('https://loca-app.herokuapp.com/pdf/Agreement1', {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }

  updateAgreement1(PDF: FormData) {
    const headers = new Headers({'Content': 'FormData'});
    return this.http.post('https://loca-app.herokuapp.com/pdf/Agreement1',PDF, {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }
}