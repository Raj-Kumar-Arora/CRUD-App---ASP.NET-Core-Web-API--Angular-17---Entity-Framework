import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // *TODO* - find best way to store this hard-coded base api URL
  // Earlier way - environment is obseleted in Angular v17
  // Alternate ways could be app.config.ts / new config in assets folder
  // For now lets live with it.
  baseApiUrl : string = 'https://localhost:7068/';
  constructor(private http:HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
   
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employees');
  }

  addEmployee(addEmployeeRequest: Employee) : Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    //addEmployeeRequest.id = '0000-0000-0000-0000-0000';
    return this.http.post<Employee>(this.baseApiUrl + 'api/employees', addEmployeeRequest);
  }

  getEmployee(id: string) : Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + 'api/employees/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest : Employee) : Observable<Employee> {
    return this.http.put<Employee> (this.baseApiUrl + 'api/employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id: string) : Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + 'api/employees/' + id);
  }
}
