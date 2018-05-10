import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'int2date'
})
export class Int2datePipe implements PipeTransform {

  transform(value: number, args?: any): Date {
    var re = new Date();
    re.setTime(value*1000);
    return re;
  }

}
