import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileService} from "../../../services/file.service";

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss']
})
export class UploadPhotosComponent implements OnInit {


  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  onChange(event) {
        let fileForm = new FormData();
        let file = event.srcElement.files;
        fileForm.append('photo', file , file.name);
        this.fileService.uploadPhoto('TESTING', fileForm)
            .subscribe(
                data =>  {
                console.log(data);
            },
                error =>    {
                    console.error(error);
                }
            );
  }


}
