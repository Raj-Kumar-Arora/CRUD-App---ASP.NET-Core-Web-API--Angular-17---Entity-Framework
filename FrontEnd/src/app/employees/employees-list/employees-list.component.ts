import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {
  employees : Employee[] = [];
  // [
    // { id : "11", name:"Raj Kumar Arora",  email:"raj@email.com",      phone: 18585, salary:10000, department:"HR" },
    // { id : "22", name:"Sanjay",           email:"sanjay@email.com",   phone: 21959, salary:32000, department:"Sales" },
    // { id : "33", name:"Narayan",          email:"narayan@email.com",  phone: 36545, salary:55000, department:"Accounts" },
    // { id : "44", name:"Nitya",            email:"nitya@email.com",    phone: 46585, salary:22000, department:"R & D" },
    // { id : "55", name:"Preeti",           email:"preeti@email.com",   phone: 51323, salary:41220, department:"Legal" }
  //];

  constructor(private employeesService : EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
      .subscribe({
        next : (employees) => {
          console.log (employees);
        },
        error : (response) => {
          console.log (response);
        }
      })
  }
}
