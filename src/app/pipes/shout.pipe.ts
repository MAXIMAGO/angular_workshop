import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {
  transform(value: any, angry: boolean): any {
    return `${String(value).toUpperCase()}${angry === true ? '!!!' : ''}`;
  }
}
