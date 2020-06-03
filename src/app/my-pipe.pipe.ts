import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  constructor() {}
  transform(value: string | any, ...args: any[]): any {
    if (typeof value !== 'string') {
      console.log('invalid input for MyPipPipe, the input should be a string');
      return value;
    } else {
      return value.toLocaleLowerCase() + '...';
    }
  }
}
