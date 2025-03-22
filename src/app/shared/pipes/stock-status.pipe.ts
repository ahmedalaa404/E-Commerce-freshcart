import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {

  transform(Quantity: number): string|null{

    if(Quantity>60)
    {
      return null;

    }
    else
    {
      return "out of Stock"
    }
  }

}
