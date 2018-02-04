import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bathroomFilter',
  pure: false
})
export class BathroomFilterPipe implements PipeTransform {

  transform(value: any, bathroomObject: any): any {
    //CHECK IF VALUE OR STATEOBJECT EXIST
    if(!value || !bathroomObject)  {
      return value;
    }
    //CHECK IF STATE OBJECT IS ALL FALSE
    //IF SO RETURN ALL
    // if(!bathroomObject.isType(Number))  {
      //   return value;
      // }

    let resultArray = [];
    value.forEach(location => {
      if(location.bathrooms >= bathroomObject)  {
        resultArray.push(location);
      }
    });
    return resultArray;
  }
}
