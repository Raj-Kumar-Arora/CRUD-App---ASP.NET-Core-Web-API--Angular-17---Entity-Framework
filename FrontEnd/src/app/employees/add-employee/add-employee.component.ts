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
    this.employeesService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => { this.router.navigate(['employees']);         },
        error: (response) => { console.log(response); }        
      });
  }
}
