import {Component, OnInit, ViewChild} from '@angular/core';
import {FileService} from '../../../services/file.service';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss']
})

export class UploadPhotosComponent implements OnInit {

    // NG STYLE VARIABLES
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';

    // GAIN LIVE ACCESS TO THE HTML FILE INPUT ELEMENT
    @ViewChild('FileInput') _FileInput;
    @ViewChild('Remove') RemoveButton;

    // VERIFICAION VARIABLES
    isAllowed = true;

    // LOCAL PREVIEW LINK
    listRecycled = [];
    LocalPhotos = [];

    constructor(private fileService: FileService,
                public uploadService: UploadService,
    ) {}

    ngOnInit() {

    }

    // REFRESH LOCAL PHOTO ARRAY INSTANCE FOR THE DOM
    updateLocalPhotos() {
        this.LocalPhotos = this.uploadService.Photos;
    }

    // ALLOW AND VERIFY DROP
    allow(event) {
        console.log(event);
        event.preventDefault();

    }
    // ADD PHOTOS TO ARRAY VIA DROP
    onDrop(event: any) {
        event.stopPropagation();
        event.preventDefault();
        const FileList = event.dataTransfer.files;
        let counter = this.uploadService.Photos.length;
        for (const file of FileList) {
            counter++;
            if (counter > 10)    {
                return;
            }
            const reader = new FileReader();
            reader.onload = (_event: any) => {
                this.uploadService.Photos.push({
                    file: file,
                    url: _event.target.result
                });
                this.updateLocalPhotos();
            };
            reader.readAsDataURL(file);
        }
    }
    // ADD PHOTOS TO ARRAY VIA SELECT
    selectFile(event)  {
        event.preventDefault();
        event.stopPropagation();
        const FileList = event.target.files;
        let counter = this.uploadService.Photos.length;
        for (const file of FileList)  {
            counter++;
            if (counter > 10)    {
                return;
            }
            const reader = new FileReader();
            reader.onload = (_event: any) => {
                this.uploadService.Photos.push({
                    file: file,
                    url: _event.target.result
                });
                this.updateLocalPhotos();
            };
            reader.readAsDataURL(file);
        }
    }
}
