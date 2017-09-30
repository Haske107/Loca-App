/**
 * Created by Jeff on 7/2/2017.
 */

export class User   {

    //stat
    _id: string;
    signupdate?: string;
    ownedLocations?: string[];
    lastViewedLocations: string[];
    ownedCollections?: string[];
    subscribedCollections?: string[];

    //form
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;



    constructor(email: string, username: string, password: string, firstName: string, lastName: string) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
