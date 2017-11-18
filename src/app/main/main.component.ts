import { Component, OnInit } from '@angular/core';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {SearchService} from '../services/search.service';
import {Dev} from '../../URLSwitcher';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  query: string;
  Profile: any;
  title =  'The Location Binder';
  isSignedIn  = false;
  isOpen = false;

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private searchService: SearchService,
              private authService: AuthService,
              private SearchService: SearchService,
              private router: Router) {
    iconRegistry.addSvgIcon(
      'binos',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/binoculars-white.svg'));
    this.authService.handleAuthentication();
  }

  ngOnInit()  {
    if (localStorage.getItem('profile')) {
      this.setProfile();
      this.isSignedIn = true;
    }
  }
  openDialog() {
    this.authService.login();

  }
  setProfile() {
    this.Profile = JSON.parse(localStorage.getItem('profile'));
  }
  logOut()  {
    this.authService.logout();
    this.isSignedIn = false;
    this.isOpen = false;
    this.router.navigateByUrl('/');
  }

  routeToPost() {
      if (this.authService.isAuthenticated()) {
        console.log(this.authService.isAuthenticated());
        this.router.navigateByUrl('/main/post');
      } else  {
        this.authService.login();
      }
  }

  public change(value: boolean): void {
    this.isOpen = value;
  }
  openChat()  {
    this.dialog.open(ChatComponent);
  }

  public updateInput(value)  {
      console.log(value);
      this.SearchService.input = value;
  }
}
