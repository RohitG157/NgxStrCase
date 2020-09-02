import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentencecasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
  }

}
