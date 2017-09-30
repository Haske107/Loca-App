import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bathroomFilter',
  pure: false
})
export class BathroomFilterPipe implements PipeTransform {

  transform(value: any, stateObject: any): any {
    //CHECK IF VALUE OR STATEOBJECT EXIST
    if(!value || !stateObject)  {
      return value;
    }
    //CHECK IF STATE OBJECT IS ALL FALSE
    //IF SO RETURN ALL
    if(!stateObject.Yes && !stateObject.No )  {
      return value;
    }

    let resultArray = [];
    value.forEach(location => {
      if(location.bathrooms >= 1 && stateObject.Yes)  {
        resultArray.push(location);
      } else if (location.bathrooms === 0 && stateObject.No)  {
        resultArray.push(location);
      }
    });
    return resultArray;
  }
}
