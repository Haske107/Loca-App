/**
 * Created by Jeff on 7/2/2017.
 */

export class Collection     {


    //DB tools
     _id: string;

    //stats
    uploadDate: string;
    views: number;
    locations: string[];
    followers: string[];

    //form
    owner: string;
    name: string;
    subtitle: string;
    publicity: boolean;
    userPermission: string[];

  constructor(owner: string, name: string, subtitle: string, publicity:  boolean)  {
        this.owner = owner;
        this.name = name;
        this.subtitle = subtitle;
        this.publicity = publicity;
        this.followers = [];
    }
}
