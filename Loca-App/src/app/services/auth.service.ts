import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import Auth0Lock from 'auth0-lock';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService   {
  listener: any;

  lock = new Auth0Lock('5d7Sac7i0PN5qK0VdzdDaPSSDOqpCyhP', 'haske107.auth0.com', {
    languageDictionary: {
      title: "Join the Community"
    },
    theme: {
      logo: './../../../assets/icons/binoculars-black.svg',
      primaryColor: '#00bcd4',
    },
    auth: {
      redirectUrl: 'http://loca-app.herokuapp.com/loading',
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email'
      }
    }
  });

  constructor(private http: Http, private router: Router) {}

  public login() {
    this.lock.show()
  }

  public handleAuthentication(): void {
    this.lock.on("authenticated", authResult =>  {
        this.setSession(authResult);
    });
  }
  private setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.idTokenPayload.exp * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.requestUserID().subscribe(data => {
      console.log(data);
      localStorage.setItem('userID', data.result);
      localStorage.setItem('profile',JSON.stringify(data.profile));
    })

  }
  public logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.clear();
    // Go back to the home route
    this.router.navigate(['/']);
  }
  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  public listenforAuthentication() {
    this.listener = setInterval(() => {
      console.log('listening');
      if (this.isAuthenticated()) {
        if (localStorage.getItem('profile')) {
          this.router.navigateByUrl('/');
        }
      }
    }, 50);
  }

  public requestUserID()  {
    const headers = new Headers({
      'Content-Type': 'application/json'});
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    return this.http.get('https://loca-app.herokuapp.com/user/' + token, {headers: headers})
      .map((response: Response)=> response.json())
      .catch((error: Response)=> Observable.throw(error.json()));
  }
}
