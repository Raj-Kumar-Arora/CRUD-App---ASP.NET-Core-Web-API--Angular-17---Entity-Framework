import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

export const routes: Routes = [
    {
        path: '',
        component:EmployeesListComponent
    },
    {
        path: 'employees',
        component:EmployeesListComponent
    },
    {
        path: 'employees/add',
        component:AddEmployeeComponent
    },
    {
        path: 'employees/edit/:id',
        component:EditEmployeeComponent
    }
];
