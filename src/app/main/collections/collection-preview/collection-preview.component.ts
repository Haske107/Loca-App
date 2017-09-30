import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Collection} from "../../../ts models/collection.model";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {LocationService} from "../../../services/location.service";
import {Location} from "../../../ts models/location.model";

@Component({
  selector: 'app-collection-preview',
  templateUrl: './collection-preview.component.html',
  styleUrls: ['./collection-preview.component.scss'],
})
export class CollectionPreviewComponent implements OnInit {

  @Input() collection: Collection;
  @Input()  selectedCollectionLocations: Location[];
  @Input() Focus: boolean = false;

  @Output() selection = new EventEmitter();

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private router: Router,
              public locationService: LocationService) {
    this.iconRegistry.addSvgIcon('arrow-right',
      this.sanitizer.bypassSecurityTrustResourceUrl("./../../../../assets/icons/arrow-right.svg"));
  }

  ngOnInit() {
  }

  toLocationProfile(location: Location) {
    this.locationService.toProfilePage(location);
  }


}
