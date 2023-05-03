import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'zero' })
export class ZeroPipe implements PipeTransform {
  transform(value: number): string {
    return value == 0 ? "" : value.toString();
  }
}


