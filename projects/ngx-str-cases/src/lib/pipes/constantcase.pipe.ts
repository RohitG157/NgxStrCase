import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constantcase'
})
export class ConstantcasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.trim().toUpperCase().split(" ").join("_");
  }

}
