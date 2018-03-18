import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CityService} from "../../../services/city.service";
import {City} from "../../../ts models/city.model";
import {PermitinfoService} from "../permitinfo.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit {

  City: City;

  constructor(private permitInfo: PermitinfoService) { }

  ngOnInit() {
    this.City = this.permitInfo.City;
  }

}
