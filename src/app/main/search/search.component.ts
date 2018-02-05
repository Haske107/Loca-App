import {Component, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatDialog, MatIconRegistry, MatSnackBar} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {LocationService} from '../../services/location.service';
import {Location} from '../../ts models/location.model';
import {SearchService} from '../../services/search.service';
import {PageStateService} from "../../services/page.state.service";

/**
 * Created by Jeff on 7/8/2017.
 */
@Component({
    selector: 'searchPage',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    providers: [MatIconRegistry]
})

export class SearchComponent implements OnInit, OnDestroy {

  // FILTER DIMENSION VARIABLES
  DrawerHeight = '100px';

  //SEARCH
  query = '';

  //TYPE BUTTON VARIABLES
    @ViewChild('type') TypeButton;
    @ViewChild('typefilter') TypeCard;
    typeState = false;
    setTypeState(value) {
      this.typeState = value;
      if (value) {
        this.electricityState = false;
        this.bathroomState = false;
        this.distanceState = false;
        this.rateState = false;
      }
    }
    TypeButtonTop: number;
    TypeButtonLeft: number;

  //ELECTRICITY BUTTON VARIABLES
    @ViewChild('electricity') ElectricityButton;
    @ViewChild('electricityfilter') ElectricityCard;
    electricityState = false;
    setElectricityState(value) {
      this.electricityState = value;
      if (value) {
        this.typeState = false;
        this.bathroomState = false;
        this.distanceState = false;
        this.rateState = false;
      }
    }
    ElectricityButtonTop: number;
    ElectricityButtonLeft: number;

    //BATHROOM BUTTON VARIABLES
    @ViewChild('bathroom') BathroomButton;
    @ViewChild('bathroomfilter') BathroomCard;
    bathroomState = false;
    setBathroomState(value) {
      this.bathroomState = value;
      if (value) {
        this.typeState = false;
        this.electricityState = false;
        this.distanceState = false;
        this.rateState = false;
      }
    }
    BathroomButtonTop: number;
    BathroomButtonLeft: number;

    //DISTANCE VARIABLES
    @ViewChild('distance') DistanceButton;
    @ViewChild('distancefilter') DistanceCard;
    distanceState = false;
    setDistanceState(value) {
      this.distanceState = value;
      if (value) {
        this.typeState = false;
        this.electricityState = false;
        this.bathroomState = false;
        this.rateState = false;
      }
    }
    DistanceButtonTop: number;
    DistanceButtonLeft: number;
    CurrentLocation: any;
    DistanceObject: {
      CurrentLocation: {lat: number, lng: number},
      Distance: number
    };

  //RATE VARIABLES
  @ViewChild('rate') RateButton;
  @ViewChild('ratefilter') RateCard;
  rateState = false;
  setRateState(value) {
    this.rateState = value;
    if (value) {
      this.typeState = false;
      this.electricityState = false;
      this.bathroomState = false;
      this.distanceState = false;
    }
  }
  RateButtonTop: number;
  RateButtonLeft: number;


    // VIEW STATE MONITOR
    state = 'split';
    // INJECTED LOCATIONS
    locations: Location[];

    @Input() opened;

    constructor(private dialog: MatDialog,
                private snackBar: MatSnackBar,
                private authService: AuthService,
                private router: Router,
                private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer,
                private LocationService: LocationService,
                private searchService: SearchService,
                private pageStateService: PageStateService)   {
      iconRegistry.addSvgIcon('marker-blue', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/marker-blue.svg'));
      iconRegistry.addSvgIcon('marker', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/marker.svg'));
      iconRegistry.addSvgIcon('grid', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/grid.svg'));
      iconRegistry.addSvgIcon('grid-blue', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/grid-blue.svg'));
      iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
      iconRegistry.addSvgIcon('split', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/split-browser.svg'));
      iconRegistry.addSvgIcon('split-blue', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/split-browser-blue.svg'));
      iconRegistry.addSvgIcon('filter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filter.svg'));
      this.pageStateService.Search = true;
        console.log(this.pageStateService.Search);

    }

    ngOnInit()  {
      // GET USER LOCATION
     navigator.geolocation.getCurrentPosition(position => {
        // SET GLOBAL CURRENT LOCATION
        this.searchService.TempDistance.CurrentLocation =
          { lat: position.coords.latitude, lng: position.coords.longitude};
      });
      // GET LOCATIONS IN RANGE
      this.LocationService.getLocationsInRange(this.searchService.TempDistance)
        .subscribe(
          (locations: Location[]) => {
            this.locations = locations;
          });
      // RETRIEVE TYPE BUTTON COORDINATES
      this.onResize();
      // LISTEN FOR DISTANCE UPDATE
      this.searchService.onDistance.subscribe(
        res =>  {
          this.LocationService.getLocationsInRange(this.searchService.TempDistance)
            .subscribe(
              (locations: Location[]) => {
                console.log(locations);
                this.locations = locations;
              }
            );
        }
      );
    }
    toggleView(toggle: string)  {
   this.state = toggle;
  }
    updateInput(value)  {
    this.searchService.input = value;
  }
    onResize() {
    // GATHER NEW COORDINATES
    this.TypeButtonTop = this.TypeButton ? this.TypeButton._elementRef.nativeElement.offsetTop : null;
    this.TypeButtonLeft = this.TypeButton ? this.TypeButton._elementRef.nativeElement.offsetLeft : null;
    this.ElectricityButtonTop = this.ElectricityButton ? this.ElectricityButton._elementRef.nativeElement.offsetTop : null;
    this.ElectricityButtonLeft = this.ElectricityButton ? this.ElectricityButton._elementRef.nativeElement.offsetLeft : null;
    this.BathroomButtonTop = this.BathroomButton ? this.BathroomButton._elementRef.nativeElement.offsetTop : null;
    this.BathroomButtonLeft = this.BathroomButton ? this.BathroomButton._elementRef.nativeElement.offsetLeft : null;
    this.DistanceButtonTop = this.DistanceButton ? this.DistanceButton._elementRef.nativeElement.offsetTop : null;
    this.DistanceButtonLeft = this.DistanceButton ? this.DistanceButton._elementRef.nativeElement.offsetLeft : null;
    this.RateButtonTop = this.RateButton ? this.RateButton._elementRef.nativeElement.offsetTop : null;
    this.RateButtonLeft = this.RateButton ?  this.RateButton._elementRef.nativeElement.offsetLeft : null;
    // CHECK IF COMPONENT IS OPEN AND REFRESH POSITION
    if (this.ElectricityCard)  {
      this.ElectricityCard.refreshPosition();
    }
    if (this.TypeCard) {
      this.TypeCard.refreshPosition();
    }
    if (this.BathroomCard) {
      this.BathroomCard.refreshPosition();
    }
    if (this.DistanceCard) {
      this.DistanceCard.refreshPosition();
    }
    if (this.RateCard) {
      this.RateCard.refreshPosition();
    }
  }



  filterClicked(event: any) {
      if ( event === 'Type')  {
          this.DrawerHeight = '330px';
      } else  {
          this.DrawerHeight = '174px';
      }
  }



  ngOnDestroy() {
      this.pageStateService.Search = false;
      console.log(this.pageStateService.Search);

  }
}
