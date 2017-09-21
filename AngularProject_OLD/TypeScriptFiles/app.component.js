"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_1 = require("./Models/Employee");
var EmployeeService_1 = require("./Logics/EmployeeService");
var AppComponent = /** @class */ (function () {
    function AppComponent(eLogic) {
        this.eLogic = eLogic;
        this.EmpName = "Sharad";
        this.Salary = 15000;
        this.Currency = "$";
        this.IsAddNew = true;
        //this.Employees=new Array<Employee>();
        //this.Employees.push(new Employee("a",1000));
        //this.Employees.push(new Employee("b",1000));
        //this.Employees.push(new Employee("c",1000));
        this.Employees = eLogic.GetEmployees();
    }
    AppComponent.prototype.Increment = function () {
        this.Salary = this.Salary + 500;
    };
    AppComponent.prototype.SaveEmployee = function () {
        this.eLogic.SaveEmployee(new Employee_1.Employee("Try", 1000));
    };
    AppComponent.prototype.HideAddNew = function () {
        this.IsAddNew = true;
    };
    AppComponent.prototype.ShowAddNew = function () {
        this.IsAddNew = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-tag",
            templateUrl: "./app.component.html",
            providers: [{ provide: EmployeeService_1.EmployeeService, useClass: EmployeeService_1.EmployeeService }]
            //how to work with relative url by changing your loader work
            //by configuring it in systemConfig
            //Otherwise fully qualified name for html will be required
            //"./TypeScriptFiles/app.component.html"
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map