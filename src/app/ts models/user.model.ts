/**
 * Created by Jeff on 7/2/2017.
 */

export class User   {

    // stat
    _id: string;
    signupdate?: string;
    ownedLocations?: string[];
    lastViewedLocations?: string[];
    ownedCollections?: string[];
    subscribedCollections?: string[];
    smallthumb?: string;
    largethumb?: string;

    // form
    email: string;
    username: string;
    firstName: string;
    lastName: string;





    constructor(email?: string,
                username?: string,
                firstName?: string,
                lastName?: string,
                smallthumb?: string,
                largethumb?: string)
    {
        email ? this.email = email : this.email = '';
        username ? this.username = username : this.username = '';
        firstName ? this.firstName = firstName : this.firstName = '';
        lastName ? this.lastName = lastName : this.lastName = '';
        smallthumb ? this.smallthumb = smallthumb : this.smallthumb = '';
        largethumb ? this.largethumb = largethumb : this.largethumb = '';
    }
}
