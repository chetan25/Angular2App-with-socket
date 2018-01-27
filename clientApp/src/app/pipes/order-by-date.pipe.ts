import {Pipe, PipeTransform} from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
 name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform{

 transform(array: Array<Todo>, sortOrder:boolean): Array<Todo> {
  //sortOrder true means newest, false means oldest
  if(!array || array === undefined || array.length === 0) return null;

    return array.sort((a: any, b: any) => {
      if (a.createdOn < b.createdOn) {
        return sortOrder ? 1 : -1;
      } else if (a.createdOn > b.createdOn) {
        return sortOrder ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
}
//You need to return 0 if the two elements are equal, 
//a negative number if a should be before b and 
//a positive number if b should be before a.