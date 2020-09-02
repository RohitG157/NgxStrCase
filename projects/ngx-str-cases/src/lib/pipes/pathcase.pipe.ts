import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pathcase'
})
export class PathcasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.trim().toLowerCase().split(" ").join("/");
  }

}
