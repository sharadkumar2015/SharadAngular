import {Component} from "@angular/core"
import {Employee} from "./Models/Employee"
import {EmployeeService} from "./Logics/EmployeeService"

@Component(
    {
        selector:"my-tag",
        templateUrl:"./app.component.html",
        providers:[{provide:EmployeeService, useClass:EmployeeService}]
        //how to work with relative url by changing your loader work
        //by configuring it in systemConfig
        //Otherwise fully qualified name for html will be required
        //"./TypeScriptFiles/app.component.html"
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
        //this.Employees=new Array<Employee>();
        //this.Employees.push(new Employee("a",1000));
        //this.Employees.push(new Employee("b",1000));
        //this.Employees.push(new Employee("c",1000));
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