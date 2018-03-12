import { Injectable } from '@angular/core';

@Injectable()
export class PageStateService {

    set Location(value: boolean){
        if (value)   {
            this.open = 'Location';
        }
    }
    set Upload(value: boolean){
        if (value)   {
            this.open = 'Upload';
        }
    }
    set Search(value: boolean){
        if (value)   {
            this.open = 'Search';
        }
    }
    set Profile(value: boolean){
        if (value)   {

            this.open = 'Profile';
        }
    }
    set Permit(value: boolean){
        if (value)   {
            console.log('Permit');
            this.open = 'Permit';
        }
    }

    open = 'Search';

  constructor() {

  }
}
