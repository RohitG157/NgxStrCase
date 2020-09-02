import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramcase'
})
export class ParamcasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.trim().toLowerCase().split(" ").join("-");
  }

}
