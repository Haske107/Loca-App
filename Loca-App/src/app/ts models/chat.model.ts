/**
 * Created by Jeff Haskell on 8/15/2017.
 */
import {Message} from "./message.model";
import {User} from "./user.model"



export class Chat {
  _id: string;
  Messages: [Message];
  Participants: [{
      User: string,
      Username?: string,
      Deleted?: boolean
    }];


  constructor( participants : [{User: string, Username?: string, Deleted?: boolean}]){
    this.Participants = participants;
  }
}
