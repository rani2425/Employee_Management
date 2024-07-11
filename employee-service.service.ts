import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl="https://dummy.restapiexample.com/api/v1/employees";

  constructor(private http:HttpClient) { }
 //Fetch All Employees
  getEmployees(): Observable<any>
  {
    return this.http.get(`${this.apiUrl}`);
  }

  //Fetch Employee By Id
  getEmployeesById(id:number): Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
 //add Employee
    addEmployee(employee:any): Observable<any>
    {
        return this.http.post(`${this.apiUrl}/create`,employee)
    }
  //update Employee

  updateEmployee(id:number,employee:any): Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,employee);
  }

  //delete employee
  deleteEmployee(id:number): Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
