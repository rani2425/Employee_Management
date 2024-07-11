import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../employee-service.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
 
})
export class EmployeeListComponent  {
  @Input() employees: any[] = [];
  @Output() editEmployee = new EventEmitter<any>(); // Define EventEmitter here

  constructor(private employeeService: EmployeeService) {}

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.fetchEmployees(); // Refresh the list after deletion
    });
  }

  onEditEmployee(employee: any): void {
    this.editEmployee.emit(employee)
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe((data:any) => {
      this.employees = data;
    });
  }
}
