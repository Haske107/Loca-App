import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CollectionCardComponent} from './collection-card/collection-card.component';
import {NewCollectionComponent} from './new-collection/new-collection.component';
import {CollectionSearchComponent} from './collection-search/collection-search.component';
import {CollectionPreviewComponent} from './collection-preview/collection-preview.component';
import {CommunityCollectionsComponent} from './community-collections/community-collections.component';
import {AngularMaterialsModule} from "../../angular-materials.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
      ReactiveFormsModule

  ],
  declarations: [
      CollectionCardComponent,
      NewCollectionComponent,
      CollectionSearchComponent,
      CollectionPreviewComponent,
      CommunityCollectionsComponent,
  ]
})
export class CollectionsModule { }
