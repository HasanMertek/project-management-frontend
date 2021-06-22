import { Employee } from './../models/employee';
import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeDto } from '../models/employeeDto';

@Pipe({
  name: 'filterPipeEmployee',
})
export class FilterPipeEmployeePipe implements PipeTransform {
  transform(value: EmployeeDto[], filterText: string): EmployeeDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (e: EmployeeDto) =>
            e.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
