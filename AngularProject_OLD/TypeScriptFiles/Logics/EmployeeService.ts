import {Employee} from "../Models/Employee"

export class EmployeeService
{
    private Employees:Array<Employee>;
    constructor()
    {
        this.Employees = new Array<Employee>();
        this.Employees.push(new Employee("A",100));
        this.Employees.push(new Employee("B",200));
        this.Employees.push(new Employee("C",300));
    }

    GetEmployees():Array<Employee>
    {
        return this.Employees;
    }

    SaveEmployee(e:Employee):void
    {
        this.Employees.push(e);
    }
}