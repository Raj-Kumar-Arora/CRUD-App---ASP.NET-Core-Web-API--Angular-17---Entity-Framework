import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  employeeDetails: Employee = {
    id : '',
    name : '',
    email : '',
    phone : 0,
    salary : 0,
    department : ''
  }

  constructor(private route:ActivatedRoute, private employeesService: EmployeesService, private router: Router) { 

  }
  ngOnInit() {
    this.route.paramMap.subscribe ({
      next: (params) => { 
        const id = params.get('id');

        if (id) {
          this.employeesService.getEmployee(id)
            .subscribe ({
              next : (response:Employee) => { this.employeeDetails = response; }
            })
        }
      }
    })
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe ({
        next: (response:Employee) => this.router.navigate(['employees']),
        error: (error) => console.log (error)
      })
  }

  deleteEmployee(id: string){
    this.employeesService.deleteEmployee(id)
      .subscribe ({
        next: (response:Employee) => this.router.navigate(['employees']),
        error: (error) => console.log (error)
      })
  }
}
