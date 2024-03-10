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
    console.log ('77 ');
    console.log ('service.add employees ' + this.baseApiUrl + 'api/employees');
    addEmployeeRequest.id = '00000000-000-000-000-0000000'
    return this.http.post<Employee>(this.baseApiUrl + 'api/employees', addEmployeeRequest)
  }
}
