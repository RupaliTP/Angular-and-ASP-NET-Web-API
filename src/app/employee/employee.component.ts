import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
    selector: 'app-employee',
    templateUrl: 'app/employee/employee.component.html',
})

export class EmployeeComponent implements OnInit
{
    statusMsg: string;
    employee: IEmployee;

    constructor(private _employeeService: EmployeeService, private activatedRoute: ActivatedRoute)
    { }
    ngOnInit() {
        let empID: string = this.activatedRoute.snapshot.params['ID'];
        this._employeeService.getEmployeeByID(empID).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMsg = "Employee with the specifie ID is not available.";
                }
                else {
                    this.employee = employeeData;
                     }
            },
            (error) => {
                this.statusMsg = "Problem with the service.";
                console.log(error);
            }
        );
    }
}