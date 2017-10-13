import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {CollectionService} from "../../../services/collection.service";
import {Collection} from "../../../ts models/collection.model";
import  {_} from "underscore"
import {MatDialog} from "@angular/material";
import {NewCollectionComponent} from "../new-collection/new-collection.component";

@Component({
  selector: 'app-community-collections',
  templateUrl: './community-collections.component.html',
  styleUrls: ['./community-collections.component.css'],
  providers: [CollectionService]
})
export class CommunityCollectionsComponent implements OnInit, AfterContentInit {

  @ViewChild('sidenav') sidenav;

  collections: Collection[] = [];
  privateCollections: Collection[] = [];
  subscribedcollections: Collection[] = [];

  inFocus: boolean = false;
  selectedCollection: Collection;
  selectedCollectionLocations: Location[];

  constructor(private collectionService: CollectionService, private dialog: MatDialog)   {}

  ngOnInit()  {

  }

  ngAfterContentInit()  {
    this.collectionService.getPublicCollections()
      .subscribe(
        (collections: Collection[]) => {
          let userID = localStorage.getItem('userID');
          this.collections = collections;
          this.subscribedcollections = _.filter(this.collections, collection => {
            return _.contains(collection.followers, userID)
          });
        });
  }

  onChange()  {
    this.collectionService.getPublicCollections()
      .subscribe(
        (collections: Collection[]) => {
          this.collections = collections;
          console.log(collections);
        });
  }
  deletecollection(collectionID: string)  {
    this.collectionService.deleteCollection(collectionID)
      .subscribe(
        data => {
          this.onChange();
        }
      )
  }
  selectCollection(collection: Collection)  {
    this.selectedCollection = collection;
    this.getCollectionLocations(collection._id);
    this.inFocus = true;
    this.sidenav.open();
  }
  getCollectionLocations( selectionID: string) {
    this.collectionService.getCollectionLocations(selectionID)
      .subscribe(
      data => {
        this.selectedCollectionLocations = data.obj;
      });
  }
  saveCollection(collection: Collection)  {
    this.collectionService.saveCollection(collection)
      .subscribe(
        data =>  {
          this.onChange();
      });
  }
}
