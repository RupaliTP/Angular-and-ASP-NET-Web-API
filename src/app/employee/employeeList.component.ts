import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employees',
    templateUrl: 'app/employee/employeeList.component.html',
    providers: [EmployeeService],

})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
   // selectedEmployeeCountRadioButton: string = 'All';
    statusMsg: string = 'Loading Please Wailt...';

    constructor(private _employeeService: EmployeeService) {
       
    }

    ngOnInit() {
        this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMsg='Problem with Service. Please try agian after sometime.'

            });
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
    
}

    