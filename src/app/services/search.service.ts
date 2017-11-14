import {EventEmitter, Injectable} from '@angular/core';
import {Prod, Dev} from '../../URLSwitcher';


@Injectable()
export class SearchService {

  constructor() { }


  onQuery: EventEmitter<string> = new EventEmitter();
  onType: EventEmitter<any> = new EventEmitter();
  onElectricity: EventEmitter<any> = new EventEmitter();
  onBathroom: EventEmitter<any> = new EventEmitter();
  onDistance: EventEmitter<any> = new EventEmitter();
  onRate: EventEmitter<any> = new EventEmitter();

  set input(value: string) {
    this.onQuery.emit(value);
  }
  set TypeFilter(value: any) {
    this.TempType = value;
    this.onType.emit(this.TempType);
  }
  set ElectricityFilter(value: any) {
    this.TempElectricity = value;
    this.onElectricity.emit(this.TempElectricity);
  }
  set BathroomFilter(value: any)  {
    this.TempBathroom = value;
    this.onBathroom.emit(value);
  }
  set DistanceFilter(value: any) {
    this.TempDistance = value;
    this.onDistance.emit(value);
  }
  set RateFilter(value: any)  {
    this.TempRate = value;
    this.onRate.emit(value);
  }

  TempType = {
    Apartment: false,
    Home: false,
    School: false,
    Restaurant: false,
    Bar: false,
    Park: false,
    Street: false,
    Business: false,
  };
  TempElectricity = {
    Yes: false,
    No: false
  };
  TempBathroom =  {
    Yes: false,
    No: false
  };
  TempDistance = {
    CurrentLocation: {lat: 33.7928203, lng: -117.8514},
    Distance: 100
  };
  TempRate = {
    low: 0,
    high: 0
  };
}
