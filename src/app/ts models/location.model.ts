/**
 * Created by Jeff on 7/2/2017.
 */


export class Location       {
    // DB tools
    _id: string;

    // stats
    collections: [string];
    views: number;
    uploadDate: String;

    // form info
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
    carParking: number;
    truckParking: number;
    deleted: boolean;
    maxPeople: number;
    soundQuality: number;
    windows: number;
    softwrap: boolean;
    ac: boolean;
    wifi: boolean;



    constructor (
      user: string,
      address?: {
        streetAddress: string,
        city: string,
        state: string,
        zip: string,
        country: string
      },
      name?: string,
      description?: string,
      rules?: string[],
      deposit?: number,
      rate?: number,
      type?: string,
      bathrooms?: number,
      electricity?: boolean,
      carParking?: number,
      truckParking?: number,
      maxPeople?: number,
      windows?: number,
      soundQuality?: number,
      softwrap?: boolean,
      ac?: boolean,
      wifi?: boolean
    ) {
      this.user =  user;
      this.address =  address;
      this.name = name;
      this.description = description;
      this.rules = rules;
      this.deposit = deposit;
      this.rate = rate;
      this.maxPeople = maxPeople;
      this.soundQuality = soundQuality;
      this.windows = windows;
      this.softwrap = softwrap;
      this.type = type;
      this.bathrooms = bathrooms;
      this.electricity = electricity;
      this.carParking = carParking;
      this.truckParking = truckParking;
      this.deleted = false;
      this.coordinates = null;
      this.ac = ac;
      this.wifi = wifi;
    }
}
