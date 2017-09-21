"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common"); //required to get the common module @module leve
var employee_component_1 = require("../EmployeeModule/employee.component");
var employee_add_component_1 = require("../EmployeeModule/employee.add.component");
var employee_list_component_1 = require("../EmployeeModule/employee.list.component");
var EmployeeService_1 = require("../Logics/EmployeeService");
var concat_pipe_1 = require("../Pipes/concat.pipe");
var mouseover_directive_1 = require("../Directives/mouseover.directive");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            declarations: [mouseover_directive_1.MouseOverDirective,
                concat_pipe_1.ConcatPipe,
                employee_component_1.EmployeeComponent,
                employee_add_component_1.EmployeeAddComponent,
                employee_list_component_1.EmployeeListComponent],
            exports: [employee_component_1.EmployeeComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [{ provide: EmployeeService_1.EmployeeService, useClass: EmployeeService_1.EmployeeService }]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map