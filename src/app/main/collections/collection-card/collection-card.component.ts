import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Collection} from "../../../ts models/collection.model";
import {Location} from "../../../ts models/location.model";
import {CollectionService} from "../../../services/collection.service";
import {MatDialog, MatIconRegistry, MatSnackBar} from "@angular/material";
import {DeleteObject} from "./delete.object.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
  providers: [CollectionService]
})
export class CollectionCardComponent implements OnInit {

  @Input()collection: Collection;
  @Output() deleteClicked = new EventEmitter();
  @Output() locationRemoved = new EventEmitter();
  @Output() selection = new EventEmitter();

  locations: Location[] = [];
  formatedlocations: Location[] = [];

  //REMOVE AFTER FIXING COLLECTION SHCEMA
  Profile: any;

  //REMOVE LOCATION
  publicity: boolean;
  deleteState: boolean = false;
  toDeleteArray: DeleteObject[] = [];
  confirmDeleteArray: string[]= [];
  isOwner: boolean;
  constructor(private collectionService: CollectionService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('flag',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/flag.svg'));
    iconRegistry.addSvgIcon('Trash Can',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Trash Can.svg'));
    iconRegistry.addSvgIcon('Paper Plane',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Paper Plane.svg'));
    iconRegistry.addSvgIcon('Pencil',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Pencil.svg'));
    iconRegistry.addSvgIcon('Glass',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/magnifying-glass-white.svg'));
    iconRegistry.addSvgIcon('stack',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/stack.svg'));


  }

  ngOnInit() {
    this.collectionService.getCollectionLocations(this.collection._id)
      .subscribe(
        data => {
          this.locations = data.obj;
          this.formatLocations();
        },
        error => console.error(error)
      );
    this.publicity = this.collection.publicity;
    this.isOwner = (this.collection.owner === localStorage.getItem("userID"));
    this.setProfile();

  };

  onDelete()  {
    this.deleteClicked.emit();
  }

  togglePublicity(collectionID: string) {
    this.collectionService.updatePublicity(collectionID)
      .subscribe(
        data => {
          this.publicity = !this.publicity;
          console.log(data);
        },
        error => {
          this.snackBar.open(error.title, null, {
            duration: 1300
          });
          console.log(error);
        });
  }

  onRemoveLocation(){
    this.locations.forEach(location => {
      this.toDeleteArray.push(new DeleteObject(location._id, false));
    });
    this.deleteState = !this.deleteState;
  }

  deleteToggle(_id: string) {
    this.toDeleteArray.forEach(DeleteObject => {
      if(_id === DeleteObject._id)  {
        DeleteObject.toggle = true;
      }
    });
  }

  onConfirmRemove() {
    this.toDeleteArray.forEach(deleteObject =>  {
      if(deleteObject.toggle === true)  {
        this.confirmDeleteArray.push(deleteObject._id);
      }
    });
    this.collectionService.removeCollectionLocation(this.collection._id, this.confirmDeleteArray)
      .subscribe(
        data => {
          console.log(data);
          this.confirmDeleteArray = [];
          this.toDeleteArray = [];
          this.locationRemoved.emit();
          this.collectionService.getCollectionLocations(this.collection._id)
            .subscribe(
              data => {
                this.locations = data.obj;
              },
              error => console.error(error)
            );
        },
        error => {
          console.error(error);
          this.toDeleteArray =[];
          this.confirmDeleteArray = [];
        }
      );
    this.deleteState = !this.deleteState;
  }

  onCancelRemove()  {
    this.toDeleteArray = [];
    this.deleteState = !this.deleteState;
  }

  //REMOVE AFTER FIXING COLLECTION SCHEMA
  setProfile() {
    this.Profile = JSON.parse(localStorage.getItem('profile'));
  }

  formatLocations() {
    if(this.locations.length >= 9) {
      this.formatedlocations = this.locations.slice(0,9);
    }

    else if(this.locations.length >= 6)  {
      this.formatedlocations = this.locations.slice(0,6);
    }
    else if(this.locations.length > 3)  {
      this.formatedlocations = this.locations.slice(0,3);
    }
    else if(this.locations.length <= 3) {
      this.formatedlocations = this.locations;
    }
  }

  emitSelection(collection : Collection)  {
    this.selection.emit(collection);
  }
}
