/**
 * Created by Jeff on 7/2/2017.
 */


export class Location       {
    //DB tools
    _id: string;

    //stats
    collections: [string];
    views: number;
    uploadDate: String;

    //form info
    user: string;
    address: {
      streetAddress: string,
      city: string,
      state: string,
      zip: string,
      country: string
    };
    coordinates: {
      lat: number,
      lng: number,
    };
    name: string;
    description: string;
    rules: string[];
    deposit: number;
    rate: number;
    type: string;
    mainPhoto: string;
    otherPhotos: string[];
    shootPhotos: string[];
    bathrooms: number;
    electricity: boolean;
    parkingSpots: number;
    deleted: boolean;

    constructor (
      user: string,
      address: {
        streetAddress: string,
        city: string,
        state: string,
        zip: string,
        country: string
      },
      name: string,
      description: string,
      rules: string[],
      deposit: number,
      rate: number,
      type: string,
      bathrooms: number,
      electricity: boolean,
      parkingSpots: number
    )
    {
      this.user =  user;
      this.address =  address;
      this.name = name;
      this.description = description;
      this.rules= rules;
      this.deposit = deposit;
      this.rate = rate;
      this.type = type;
      this.bathrooms = bathrooms;
      this.electricity = electricity;
      this.parkingSpots = parkingSpots;
      this.deleted = false;
      this.coordinates = null;
    }

}
