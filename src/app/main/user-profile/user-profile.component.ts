import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {ChatComponent} from '../chat/chat.component';
import {MdDialog} from '@angular/material';
import {CollectionService} from '../../services/collection.service';
import {Collection} from '../../ts models/collection.model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService, CollectionService]
})
export class UserProfileComponent implements OnInit {

  username1 = '';
  CreatedCollections: Collection[] = [];

  constructor( private userservice: UserService, private collectionService: CollectionService, private dialog: MdDialog ) { }

  ngOnInit() {
    this.userservice.getUser( localStorage.getItem( 'userID' ) )
        .subscribe(
            data => { this.username1 = data.obj.firstName; },
            // data => { console.log( data ) },
            error => { console.error( error ); }
        );
    this.collectionService.getCreatedCollections()
      .subscribe(
        data =>  {
          this.CreatedCollections = data;
        },
        error => {
        console.error(error);
    });






  }

  openDialog()  {
    this.dialog.open(ChatComponent);
  }

}
