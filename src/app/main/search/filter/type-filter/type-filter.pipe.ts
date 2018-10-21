import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter',
  pure: false
})
export class TypeFilterPipe implements PipeTransform {

  transform(value: any, typeObject: any): any {
    //  IF LOCATIONS ARRAY IS EMPTY AND
    // IF TYPE ARRAY IS EMPTY SKIP THIS FILTER


    if (!value || !typeObject) {
      return value;
    }
    if (!typeObject.Apartment
      && !typeObject.School
      && !typeObject.Park
      && !typeObject.Restaurant
      && !typeObject.Street
      && !typeObject.House
      && !typeObject.Business
      && !typeObject.Bar
    )  {
      return value;
    }

    // LOOP THROUGH EACH LOCATION AND STORE THEM IN
    // RESULT ARRAY IF THEY HAVE A TYPE MATCH
    // RETURN THE RESULTING ARRAY
    const resultArray = [];
    value.forEach(location => {
      if (location.type === 'Apartment' && typeObject.Apartment) {
        resultArray.push(location);
      } else  if (location.type === 'School' && typeObject.School) {
        resultArray.push(location);
      } else  if (location.type === 'Bar' && typeObject.Bar) {
        resultArray.push(location);
      }else  if (location.type === 'Business' && typeObject.Business) {
        resultArray.push(location);
      }else  if (location.type === 'Park' && typeObject.Park) {
        resultArray.push(location);
      }else  if (location.type === 'Restaurant' && typeObject.Restaurant) {
        resultArray.push(location);
      }else  if (location.type === 'Street' && typeObject.Street) {
        resultArray.push(location);
      }else  if (location.type === 'House' && typeObject.House) {
        resultArray.push(location);
      }

        });
    return resultArray;
  }

}
