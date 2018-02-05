import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateFilter',
  pure: false
})
export class RateFilterPipe implements PipeTransform {

  transform(value: any, rateObject: any): any {

    // CHECK IF VALUE OR STATEOBJECT EXIST
    if(!value || !rateObject)  {
      return value;
    }
    const resultArray = [];
    value.forEach(location => {
      if(location.rate >= rateObject.low)   {
        resultArray.push(location);
      }
    });
    return resultArray;
  }

}
