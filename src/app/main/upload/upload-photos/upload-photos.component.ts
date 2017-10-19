import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FileService} from '../../../services/file.service';
import {Location} from '../../../ts models/location.model';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss']
})
export class UploadPhotosComponent implements OnInit {

    // GAIN LIVE ACCESS TO THE HTML FILE INPUT ELEMENT
    @ViewChild('FileInput') _FileInput: ElementRef;

    // AN INSTANCE OF THE CURRENT LOCATION BEING UPLOADED IS INJECTED INTO THIS COMPONENT
        // HAS TO HAVE BEEN INITILIAZED BY THE DATABASE IN ORDER TO RECEIVE UNIQUE ID
    @Input()location: Location;

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

    uploadFile() {
      // CREATE NEW EMPTY FORM-DATA INSTANCE
        const formData = new FormData();
      // STORE FILES CURRENTLY STORED IN OUR HTML INPUT ELEMENT
            // IT WOULD BE GOOD TO CHECK IF ANYTHING IS INSIDE FIRST
        const FileList = this._FileInput.nativeElement.files;
      // APPEND EACH FILE TO THE FORM-DATA
        // ASSIGN KEYWORD PHOTO FOR THE SERVER
            // MAKE A FOR LOOP TO MAKE IT MORE DYNAMIC
        formData.append('photo', FileList[0]);
    // LETS DOUBLE CHECK THAT THE INJECTED LOCATION HAS AN ID
        if (!this.location._id)   {
            // FOR NOW, SINCE WE WONT HAVE ONE INJECTED FOR DEV PURPOSES, WE WILL REPLACE IT
            this.location._id = 'testing-DELETE ME ASAP';
        }
      // CALL THE MAGICAL FILE SERVICE TO SEND IT INTO WONDERLAND
        this.fileService.uploadPhoto( this.location._id, formData)
            .subscribe(
                data =>  {
                    // 201 SOMETHING GOOD HAPPENED
                console.log(data);
            },
                error =>    {
                    // 400-500 YOU PROBABLY AREN'T SIGNED IN, ONLY ACTIVE USERS CAN POST
                    console.error(error);
                }
            );
  }


}
