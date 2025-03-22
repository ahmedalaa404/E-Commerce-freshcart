import { product } from './../../features/product/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: product[], textSearch: string): product[] {
    return value.filter((item) => {
      item.title.includes(textSearch);
    });
  }
}
