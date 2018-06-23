import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import {BathroomFilterComponent} from './filter/bathroom-filter/bathroom-filter.component';
import {FilterPipe} from './filter.pipe';
import {RateFilterComponent} from './filter/rate-filter/rate-filter.component';
import {DistanceFilterComponent} from './filter/distance-filter/distance-filter.component';
import {TypeFilterComponent} from './filter/type-filter/type-filter.component';
import {ElectricityFilterComponent} from './filter/electricity-filter/electricity-filter.component';
import {TypeFilterPipe} from './filter/type-filter/type-filter.pipe';
import {ElectricityFilterPipe} from './filter/electricity-filter/electricity-filter.pipe';
import {BathroomFilterPipe} from './filter/bathroom-filter/bathroom-filter.pipe';
import {RateFilterPipe} from './filter/rate-filter/rate-filter.pipe';
import {SearchGrid} from './Grid/grid.component';
import {MapComponent} from './map/map.component';
import {SearchComponent} from './search.component';
import {ListComponent} from './list/list.component';
import {CollectionButtonComponent} from "./Grid/card/collection-button/collection-button.component";
import { FilterDrawerComponent } from './filter-drawer/filter-drawer.component';

// SERVICES
import {SearchService} from '../../services/search.service';
import {CardComponent} from "./Grid/card/card.component";
import {AngularMaterialsModule} from "../../angular-materials.module";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {Routing} from "../../app.routing";
import {MatSliderModule} from '@angular/material';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
      MatSliderModule,
      FormsModule,
      Routing,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI'
      })

  ],
  declarations: [
      BathroomFilterComponent,
      FilterPipe,
      RateFilterComponent,
      DistanceFilterComponent,
      TypeFilterComponent,
      ElectricityFilterComponent,
      BathroomFilterComponent,
      TypeFilterPipe,
      ElectricityFilterPipe,
      BathroomFilterPipe,
      RateFilterPipe,
      SearchComponent,
      MapComponent,
      SearchGrid,
      ListComponent,
      CardComponent,
      CollectionButtonComponent,
      FilterDrawerComponent,
      LandingComponent,

  ],
    providers: [
        SearchService
    ]
})
export class SearchModule { }
