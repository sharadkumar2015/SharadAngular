import {Component} from "@angular/core"
import {Employee} from "../Models/Employee"

@Component(
    {
        selector:"employee",
        templateUrl:"./employee.component.html",
    }
)
export class EmployeeComponent{
    IsAddNew:boolean;

    constructor() {
        this.IsAddNew = true;
    }

    HideAddNew():void{
        this.IsAddNew = true;
    }

    ShowAddNew():void{
        this.IsAddNew = false;
    }
}   