import {Component, EventEmitter, Input, OnInit, Output, NgZone} from '@angular/core';
import {Collection} from "../../../../../ts models/collection.model";
import {Location} from "../../../../../ts models/location.model";
import {CollectionService} from "../../../../../services/collection.service";
import {MatIconRegistry, MatSnackBar} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-collection-button',
  templateUrl: './collection-button.component.html',
  styleUrls: ['./collection-button.component.css']
})

export class CollectionButtonComponent implements OnInit {

  @Input() location: Location;
  @Input() collections: Collection[];


  constructor(private collectionService: CollectionService,
              private snackbar: MatSnackBar,
              private zone: NgZone,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
    'plus',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));}

  ngOnInit() {
  }

  onCollectionClick(collectionID: string) {
    this.collectionService.addLocationToCollection(collectionID, this.location)
      .subscribe(
        data => {
          this.snackbar.open('Saved ' + this.location.name + ' to ' + data.obj.name, null, {
            duration: 1300
          });
          console.log(data);
        },
        error => {
          this.snackbar.open('Error: ' + error, null, {
            duration: 1300
          });
          console.error(error)
        }
      );
  }
}
