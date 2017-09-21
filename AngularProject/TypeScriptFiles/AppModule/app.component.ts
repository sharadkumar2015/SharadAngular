import {Component} from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"

@Component(
    {
        selector:"my-tag",
        templateUrl:"./app.component.html"
    }
)

export class AppComponent{
    EmpName:string;
    Salary:number;
    Currency:string;
    IsAddNew:boolean;

    Increment():void{
        this.Salary = this.Salary + 500;
    }

    Employees:Array<Employee>;
    constructor(private eLogic:EmployeeService)
    {
        this.EmpName = "Sharad";
        this.Salary=15000;
        this.Currency ="$";
        this.IsAddNew=true;
        this.Employees=eLogic.GetEmployees();
    }

    SaveEmployee():void
    {
        this.eLogic.SaveEmployee(new Employee("Try",1000));
    }

    HideAddNew():void{
        this.IsAddNew=true;
    }

    ShowAddNew():void{
        this.IsAddNew=false;
    }
}


@Component(
    {
        selector:"product",
        template:"<h1>Product</h1>"
    }
)
export class ProductComponent
{}

@Component(
    {
        selector:"customer",
        template:"<h1>Customer</h1>"
    }
)
export class CustomerComponent
{}