import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalcase'
})
export class PascalcasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = value.trim().split(" ");

    for (let i = 0, x = value.length; i < x; i++) {
        value[i] = value[i][0].toUpperCase() + value[i].substr(1);
    }

    return value.join("");
  }

}
