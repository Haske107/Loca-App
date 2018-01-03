import {Component, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {LocationService} from "../../services/location.service";
import {AuthService} from "../../services/auth.service";
import {Location} from '../../ts models/location.model';
import {PageStateService} from "../../services/page.state.service";

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainToolbarComponent implements OnInit {


  constructor(private router: Router,
              private locationService: LocationService,
              private authService: AuthService,
              private pageStateService: PageStateService) { }

  ngOnInit() {

  }

  routeToPost() {
      if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/main/post');
      } else  {
          this.authService.login();
      }
  }
}
