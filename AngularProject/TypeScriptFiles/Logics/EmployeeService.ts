import {Employee} from "../Models/Employee"
import {Http, Response} from "@angular/http"
import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"

@Injectable() //this is required if there's no other decorator & constructor object needs to be created
export class EmployeeService
{
    private Employees:Array<Employee>;
    constructor(private http:Http)
    {
        this.Employees = new Array<Employee>();
        this.Employees.push(new Employee("A",100));
        this.Employees.push(new Employee("B",200));
        this.Employees.push(new Employee("C",300));
    }

    //GetEmployees():Array<Employee>
    GetEmployees():Observable<Response>
    {
        return this.http.get("http://trainitservice.azurewebsites.net/api/employee");
        //return this.Employees;
    }

    SaveEmployee(e:Employee):void
    {
        this.Employees.push(e);
    }
}