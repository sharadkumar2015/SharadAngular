import {Component, Output, EventEmitter} from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"


@Component(
    {
        selector:"employee-list",
        templateUrl:"./employee.list.component.html",
    }
)
export class EmployeeListComponent{
    Employees:Array<Employee>;
    myColor:string;

    constructor(private eLogic:EmployeeService)
    {
        this.myColor = "green";
        //this.Employees=eLogic.GetEmployees();
        eLogic.GetEmployees().subscribe(
            (r) => {
                let tempEmp:Array<any> = r.json();

                this.Employees = tempEmp.map((e) =>
                    {
                        return new Employee(e.FirsName + ' ' + e.LastName,e.Salary);
                    }
                );

            }
        );
    }

    @Output() OnShowAddNew:EventEmitter<void> = new EventEmitter<void>();

    ShowAddNew():void
    {
        this.OnShowAddNew.emit();
    }
}