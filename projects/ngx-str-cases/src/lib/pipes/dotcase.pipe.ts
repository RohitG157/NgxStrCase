import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotcase'
})
export class DotcasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.trim().toLowerCase().split(" ").join(".");
  }

}
