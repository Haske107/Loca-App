import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Chat} from '../../ts models/chat.model';
import {ChatService} from './chat.service';
import {UserService} from '../../services/user.service';
import {Message} from '../../ts models/message.model';
import {MatSnackBar} from '@angular/material';
import {User} from '../../ts models/user.model';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService, UserService]
})
export class ChatComponent implements OnInit, OnDestroy {

  @ViewChild('sideNav') sideNav;
  @ViewChild('chatSpace') chatSpace;

  listener;

  Chats: Chat[] = [];
  myUser: User;
  myID: string = localStorage.getItem('userID');

  currentRecipents: string[] = [];
  currentChat: Chat;
  Message: string;

  constructor(private chatService: ChatService, private userService: UserService, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.getChats();
    this.getUser();
  }

  ngOnDestroy() {
    clearInterval(this.listener);
  }

  createChat()  {
    const newChat = new Chat([{User: '598a1805c3767b252c0c9778', Username: 'Jeff Haskell', Deleted: false}
                           , {User: '598cc5a994630c50bc72b5f2', Username: 'Justin Estrada', Deleted: false}]);

    console.log(newChat);
    this.chatService.createChat(newChat)
      .subscribe(
        data => {
          this.getChats();
        },
        error =>  {
          console.error(error);
        }
      );
  }

  deleteChat(chat: Chat)  {
    this.chatService.deleteChat(localStorage.getItem('userID'), chat)
      .subscribe(
        data => {
          this.getChats();
        },
        error => {console.error(error); }
      );
  }

  getChats()  {
    this.chatService.getUsersChats(localStorage.getItem('userID'))
      .subscribe(
        data => {
          console.log(data.result);
          this.Chats = data.result;
          console.log(this.Chats);
          clearInterval(this.listener);
        },
        error => {
          console.error(error);
        });
  }

  getMessages(currentChat: Chat) {
    this.chatService.getMessages(currentChat)
      .subscribe(
        data => {
          console.log('subscribed');
          this.currentChat.Messages = data.result.Messages;
          this.scrollToBottom();
        },
        error =>  {
          console.error(error);
        }
      );
  }

  getUser() {
    this.userService.getUser(localStorage.getItem('userID'))
      .subscribe(
        data => {
          this.myUser = data.obj;
        }
      );
  }

  setCurrentChat(chat: Chat)  {
    this.currentChat = chat;
    this.currentChat.Participants.forEach(user => {
      if (user.User !== localStorage.getItem('userID'))  {
        this.currentRecipents.push(user.Username);
      }
    });
    this.sideNav.close();
    this.listenforMessages();

  }

  sendMessage(content: string)  {
    const newMessage = new Message(this.myUser.username, localStorage.getItem('userID'), content, new Date().getTime().toString());
    this.chatService.sendMessage(newMessage, this.currentChat._id)
      .subscribe(
        data => {
          this.snackbar.open('Delivered', null, {
            duration: 500
          });
          this.getMessages(this.currentChat);
          this.Message = '';
        },
        error =>  {
          console.error(error);
        }
      );
  }

  scrollToBottom()  {
  this.chatSpace.nativeElement.scrollTop = this.chatSpace.nativeElement.scrollHeight;
  }

  listenforMessages() {
    this.listener = setInterval(() => {
      console.log('subscribed');
      this.getMessages(this.currentChat);
    }, 500);
  }
}
