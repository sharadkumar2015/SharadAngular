import {Component, Output, EventEmitter} from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"

@Component(
    {
        selector:"employee-add",
        templateUrl:"./employee.add.component.html",
    }
)

export class EmployeeAddComponent{
    Employees:Array<Employee>;
    constructor(private eLogic:EmployeeService)
    { }

    emp:Employee = new Employee("Def",0);
    SaveEmployee(n:string,s:number):void
    {
        this.eLogic.SaveEmployee(this.emp);
        this.OnSave.emit();
    }

    @Output() OnSave:EventEmitter<void> = new EventEmitter<void>();

    @Output() OnCancel:EventEmitter<void> = new EventEmitter<void>();
}