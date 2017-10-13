import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Collection} from "../../../ts models/collection.model";
import {CollectionService} from "../../../services/collection.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss'],
  providers: [CollectionService]
})

export class NewCollectionComponent implements OnInit {

  collectionForm: FormGroup;
  @Output() onSubmitClick = new EventEmitter();


  constructor(private collectionService: CollectionService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.collectionForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Subtitle: new FormControl(null),
    })
  }

  onSubmit()  {
    const collection = new Collection(
      localStorage.getItem('userID'),
      this.collectionForm.value.Name,
      this.collectionForm.value.Subtitle,
      true,
    );
    this.onSubmitClick.emit(collection);

    this.collectionForm.reset();

  }

}
