import { Component, EventEmitter, Output } from "@angular/core"
import { Employee } from "../Models/employee"
import { EmployeeService } from "../Logics/EmployeeService"
@Component({
    selector: 'employee-list',
    templateUrl: './emp.list.component.html'
})
export class EmployeeListComponent {
    Employees: Array<Employee>;

    @Output() OnAddNew: EventEmitter<void> = new EventEmitter<void>();

    myColor:string;

    constructor(private eLogic: EmployeeService) {
        this.myColor="green";
        this.Employees = eLogic.GetEmployees();
    }

    SetOrange():void{
        this.myColor="orange";
    }
    SetGreen():void{
        this.myColor="green";

    }


    c: number = 0;
    ShowAddNew(): void {
        this.c++;
        if (this.c == 2) {
            this.OnAddNew.emit();
            this.c = 0;
        }

    }
}