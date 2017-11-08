import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatTabsModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material';
import {MatMenuModule, MatToolbarModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatNativeDateModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
      HttpClientModule,
    CommonModule,
      // ANGULAR MATERIALS
      MatCardModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatListModule, MatChipsModule,
      MatGridListModule, MatTabsModule, MatMenuModule, MatIconModule, MatInputModule, MatDialogModule,
      MatSnackBarModule, MatCheckboxModule, MatProgressBarModule, MatAutocompleteModule, MatSlideToggleModule,
      MatProgressSpinnerModule, MatRadioModule, MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
      MatStepperModule
  ],
    exports: [
        // ANGULAR MATERIALS
        MatCardModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatListModule, MatChipsModule,
        MatGridListModule, MatTabsModule, MatMenuModule, MatIconModule, MatInputModule, MatDialogModule,
        MatSnackBarModule, MatCheckboxModule, MatProgressBarModule, MatAutocompleteModule, MatSlideToggleModule,
        MatProgressSpinnerModule, MatRadioModule, MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
        MatStepperModule
    ],

  declarations: []
})
export class AngularMaterialsModule { }
