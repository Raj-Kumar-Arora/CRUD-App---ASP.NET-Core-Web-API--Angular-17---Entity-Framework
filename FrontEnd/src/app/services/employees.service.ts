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
    console.log ('service.getallemployees ' + this.baseApiUrl + 'api/employees');
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employees');
  }
}
