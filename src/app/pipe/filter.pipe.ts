import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(items: any[], searchText: string): any[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    searchText = searchText.toLowerCase();

    return items.filter(item => {
        return (item.name.toLowerCase().includes(searchText)); //|| item.contactNo.toLowerCase().includes(searchText));
    });
  }

}
