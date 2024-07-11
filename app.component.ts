import { Component, EnvironmentProviders } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee-service.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, EmployeeFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [importProvidersFrom(provideHttpClient(withFetch())), 
              EmployeeService]

})
export class AppComponent {
  title = 'employee-management';
  selectedEmployee: any = null;
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {
    this.fetchEmployees();  // Fetch employees when component is initialized
  }

  editEmployee(employee: any): void {
    this.selectedEmployee = employee;
  }

  onEmployeeSaved(eventData: any): void {
    this.selectedEmployee = null;
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees: any) => {
      this.employees = employees;
    });
  }
}
function importProvidersFrom(arg0: EnvironmentProviders): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

