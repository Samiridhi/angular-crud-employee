import { Pipe, PipeTransform } from '@angular/core';
import { Emp } from './emp';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(emps: Emp[], searchstr:string): any {
    return emps.filter(e=>{
      return e.empFName.toLowerCase().includes(searchstr.toLowerCase())
      || e.empLName.toLowerCase().includes(searchstr.toLowerCase())
      || e.empDesignation.toLowerCase().includes(searchstr.toLowerCase())
      // || e.empPManager.toLowerCase().includes(searchstr.toLowerCase())
      || e.empId.toFixed().includes(searchstr)
    }
          
      );
  }

}
