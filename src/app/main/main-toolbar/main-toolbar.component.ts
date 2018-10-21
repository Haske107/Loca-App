import {Component, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {Location} from '../../ts models/location.model';
import {PageStateService} from '../../services/page.state.service';
import {FileService} from '../../services/file.service';
import {UploadService} from '../upload/upload.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainToolbarComponent implements OnInit {

  SignedIn = false;
  ProfilePicture = '';
  PictureTop = '-24px';
  DropDown = false;
  ProfileTop = '-104px';
  CollectionTop = '-52px';
  MessageTop = '-78px';
  LocationTop = '-26px';
  LogTop = '-130px';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
      if (this.authService.isAuthenticated())    {
          this.SignedIn = true;
          this.ProfilePicture = JSON.parse(localStorage.getItem('profile')).picture_large ?
              JSON.parse(localStorage.getItem('profile')).picture_large :
              JSON.parse(localStorage.getItem('profile')).picture;
      }
  }

  routeToPost() {
      if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/main/post');
      } else  {
          this.authService.login();
      }
  }

  signIn()  {
      this.authService.login();
      // const SignInWaiter = this.authService.SignInEvent.subscribe(
      //     event =>  {
      //         this.SignedIn = true;
      //         this.ProfilePicture = JSON.parse(localStorage.getItem('profile')).picture_large ?
      //             JSON.parse(localStorage.getItem('profile')).picture_large :
      //             JSON.parse(localStorage.getItem('profile')).picture;
      //         SignInWaiter.unsubscribe();
      //     }
      // );
  }

  logOut()  {
      this.authService.logout();
      this.toggleDropDown();
      this.SignedIn = false;

  }

  toggleDropDown()  {
    if (this.DropDown)  {
        this.ProfileTop = '-104px';
        this.CollectionTop = '-52px';
        this.MessageTop = '-78px';
        this.LocationTop = '-26px';
        this.LogTop = '-130px';
        this.PictureTop = '-24px';
        this.DropDown = false;
    }   else    {
        this.PictureTop = '-38px';
        this.ProfileTop = '0';
        this.CollectionTop = '0';
        this.MessageTop = '0';
        this.LocationTop = '0';
        this.LogTop = '0';
        this.DropDown = true;
    }
  }
}
