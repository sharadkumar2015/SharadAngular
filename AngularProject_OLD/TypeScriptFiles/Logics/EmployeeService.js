"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Models/Employee");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.Employees = new Array();
        this.Employees.push(new Employee_1.Employee("A", 100));
        this.Employees.push(new Employee_1.Employee("B", 200));
        this.Employees.push(new Employee_1.Employee("C", 300));
    }
    EmployeeService.prototype.GetEmployees = function () {
        return this.Employees;
    };
    EmployeeService.prototype.SaveEmployee = function (e) {
        this.Employees.push(e);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map