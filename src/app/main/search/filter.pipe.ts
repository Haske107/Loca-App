import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform( value: any, input: string, propName: string): any {

    if (value) {
      if ( input === '' || value.length < 1 )  {
        return value;
      }
      const resultArray = [];
      for (const item of value)  {
        if ( item.name.toUpperCase().includes(input.toUpperCase()))  {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }
}
