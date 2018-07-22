import { Component } from '@angular/core';

import { Employee } from "../models/employee";
import { SSL_OP_NO_TLSv1_2 } from 'constants';

@Component({
    selector: 'employees-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent {
    constructor() { }
    title: string = "Synechron Employees List!";
    subTitle: string = "Core Development Team";
    selectedEmployee: Employee;
    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
        console.log(this.selectedEmployee);
    }
    synechronEmployees: Employee[] = [
        {
            employeeId: 2589,
            employeeName: "Aniket",
            address: "Baner",
            city: "Pune",
            email: "aniket@gmail.com",
            phone: "+91 7847046168",
            avatar: "/images/noimage.png"

        },
        {
            employeeId: 2512,
            employeeName: "Bhoomika",
            address: "Baner",
            city: "Pune",
            email: "bhoomika@gmail.com",
            phone: "+91 8805497898",
            avatar: "images/noimage.png"

        },
        {
            employeeId: 2239,
            employeeName: "Animesh",
            address: "Kalyanpur",
            city: "Kanpur",
            email: "animesh@gmail.com",
            phone: "+91 8604589871",
            avatar: "images/noimage.png"

        }
    ]
}