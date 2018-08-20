import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls:['app/employee/employeeCount.component.css'],
})

export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Input()
    all: number;

    @Input()
    female: number;

    @Input()
    male: number;
    
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChanged() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}