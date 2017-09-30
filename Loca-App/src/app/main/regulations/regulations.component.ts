import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.css']
})
export class RegulationsComponent implements OnInit {


  current : Number = 0;
  constructor() { }

  ngOnInit() {
  }

  toggleSection(section: Number)  {
    if(this.current === section)  {
      this.current = 0;
    }
    else{
      this.current = section;

    }
  }


}
