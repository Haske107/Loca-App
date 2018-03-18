import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {PageStateService} from '../../services/page.state.service';
import {City} from '../../ts models/city.model';
import {CityService} from '../../services/city.service';
import {PermitinfoService} from './permitinfo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-permit',
  templateUrl: './permit.component.html',
  styleUrls: ['./permit.component.scss'],
    providers: [CityService, PermitinfoService],
  encapsulation: ViewEncapsulation.None
})
export class PermitComponent implements OnInit, OnDestroy {

  Cities: City[];
  Loading: boolean;

  constructor(private pageStateService: PageStateService,
              private cityService: CityService,
              private permitInfoService: PermitinfoService,
              private router: Router
  ) { }

  ngOnInit() {
    this.Loading = true;
    this.pageStateService.Permit = true;
    this.cityService.getCities().subscribe(data =>  {
      this.Loading = false;
      this.Cities = data.obj;
    });
  }

  ngOnDestroy() {
    this.pageStateService.Permit = false;
  }

  selectCity(Name: string) {
    this.Cities.forEach(City => {
      if (City.name = Name) {
        this.permitInfoService.City = City;
        this.router.navigateByUrl('/main/info');
      }
    });
  }
}