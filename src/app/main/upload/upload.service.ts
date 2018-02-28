import {Component, EventEmitter, Injectable, OnChanges, OnDestroy, Output} from '@angular/core';
import {Location} from '../../ts models/location.model';
import {PageStateService} from "../../services/page.state.service";

@Injectable()
export class UploadService  {

  public NewLocation: Location = new Location(
      null,
      null,
      null,
      null,
      null,
      0,
      0,
      null,
      0,
      false,
      0
  );

  public Photos = [];

  public ChangeEmitter = new EventEmitter<any>();

  constructor() {
      if (localStorage.getItem('location'))   {
        this.NewLocation = JSON.parse(localStorage.getItem('location'));
    } else {
        if (localStorage.getItem('userID'))  {
            this.NewLocation = new Location(localStorage.getItem('userID'));
        }   else    {
            // this.authService.login();
        }
    }
  }

  emitChanges(CompID: number) {
      this.ChangeEmitter.emit({location: this.NewLocation, ID: CompID});
      localStorage.setItem('location', JSON.stringify(this.NewLocation));
  }



}
