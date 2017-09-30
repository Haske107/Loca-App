import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MdAutocompleteModule,
    MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialogModule, MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule,
    MdSelectModule, MdSidenavModule, MdSlideToggleModule, MdSnackBarModule, MdStepperModule,
    MdTableModule, MdTabsModule,
    MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

      // ANGULAR MATERIALS
      MdCardModule, MdButtonModule, MdToolbarModule, MdSelectModule, MdListModule, MdChipsModule,
      MdGridListModule, MdTabsModule, MdMenuModule, MdIconModule, MdInputModule, MdDialogModule,
      MdSnackBarModule, MdCheckboxModule, MdProgressBarModule, MdAutocompleteModule, MdSlideToggleModule,
      MdProgressSpinnerModule, MdRadioModule, MdSidenavModule, MdDatepickerModule, MdNativeDateModule, MdTableModule,
      MdStepperModule

  ],
    exports: [
        // ANGULAR MATERIALS
        MdCardModule, MdButtonModule, MdToolbarModule, MdSelectModule, MdListModule, MdChipsModule,
        MdGridListModule, MdTabsModule, MdMenuModule, MdIconModule, MdInputModule, MdDialogModule,
        MdSnackBarModule, MdCheckboxModule, MdProgressBarModule, MdAutocompleteModule, MdSlideToggleModule,
        MdProgressSpinnerModule, MdRadioModule, MdSidenavModule, MdDatepickerModule, MdNativeDateModule, MdTableModule,
        MdStepperModule

    ],

  declarations: []
})
export class AngularMaterialsModule { }
