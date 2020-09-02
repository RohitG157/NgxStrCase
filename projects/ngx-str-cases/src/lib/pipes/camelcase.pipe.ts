import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: any): any {
    return value 
        .replace(/\s(.)/g, function(a) { 
            return a.toUpperCase(); 
        }) 
        .replace(/\s/g, '') 
        .replace(/^(.)/, function(b) { 
            return b.toLowerCase(); 
        }); 
  }

}
