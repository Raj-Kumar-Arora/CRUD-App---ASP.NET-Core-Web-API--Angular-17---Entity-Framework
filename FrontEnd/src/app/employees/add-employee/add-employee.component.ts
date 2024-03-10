import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  addEmployeeRequest : Employee = {
    id : '',
    name : '',
    email : '',
    phone : 0,
    salary : 0,
    department : ''
  }

  constructor(private employeesService: EmployeesService, private router: Router) {

  }

  addEmployee() {
    console.log ('99 ');
    this.employeesService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => { console.log ('55 '); 
        //this.router.navigate(['employees']);  
        },
        error: (response) => { console.log ('11 '); console.log(response); }        
      });
  }
}
