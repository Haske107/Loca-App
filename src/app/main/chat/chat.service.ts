import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Chat} from '../../ts models/chat.model';
import {Message} from '../../ts models/message.model';
import {Observable} from 'rxjs/Observable';
import {Prod, Dev} from '../../../URLSwitcher';


@Injectable()
export class ChatService {

  constructor(private http: Http) { }


  createChat(newChat: Chat) {
    const body = JSON.stringify(newChat);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    const header = new Headers({'content-type' : 'application/json'});
    return this.http.post('https://' + Dev +  '/chat/createChat' + token, body, {headers: header})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  sendMessage(newMessage: Message, chatID: string)  {
    const body = JSON.stringify(newMessage);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    const header = new Headers({'content-type' : 'application/json'});
    return this.http.post('https://' + Dev +  '/chat/createMessage/' + chatID + token, body, {headers: header})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages(currentChat: Chat)  {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    const header = new Headers({'content-type' : 'application/json'});
    return this.http.get('https://' + Dev +  '/chat/getMessages/' + currentChat._id + token, {headers: header})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getUsersChats(userID: string) {
    const header = new Headers({'content-type' : 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.get('https://' + Dev +  '/chat/getChats/' + userID + token, {headers: header})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteChat(userID: string, chat: Chat)  {
    const body = JSON.stringify(chat);
    const header = new Headers({'content-type' : 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('https://' + Dev +  '/chat/deleteChat' + userID + token, body, {headers: header})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
