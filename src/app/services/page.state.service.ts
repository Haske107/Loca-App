import { Injectable } from '@angular/core';
import { MainComponent} from "../main/main.component";

@Injectable()
export class PageStateService {



    Location = false;
    Upload = false;
    Search = false;
    Profile = false;
    Permit = false;


  constructor() { }

  public isOpen() {
    if (this.Location) {
      return 'Location';
    } else if (this.Upload) {
        return 'Upload';

    } else if (this.Search) {
        return 'Search';

    } else if (this.Profile)  {
        return 'Profile';

    } else if (this.Permit) {
        return 'Permit';

    } else {

    }
  }

}
