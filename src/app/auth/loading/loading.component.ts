import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy, OnChanges {



  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
      this.authService.handleAuthentication();
      this.authService.listenforAuthentication();
  }

  ngOnDestroy() {
    clearInterval(this.authService.listener);
  }

  ngOnChanges() {

  }

}
