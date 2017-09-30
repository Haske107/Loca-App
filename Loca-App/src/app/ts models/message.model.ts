/**
 * Created by Jeff Haskell on 8/15/2017.
 */
export class Message {
  Author: string;
  AuthorID: string;
  Content: string;
  Time: string;
  read: boolean;

  constructor(private author: string, private authorID: string, private content: string, private time: string) {
    this.Author = author;
    this.AuthorID = authorID;
    this.Content = content;
    this.Time = time;
    this.read = false;
  }
}
