import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common" //required to get the common module @module leve
import {EmployeeComponent} from "../EmployeeModule/employee.component"
import {EmployeeAddComponent} from "../EmployeeModule/employee.add.component"
import {EmployeeListComponent} from "../EmployeeModule/employee.list.component"
import {EmployeeService} from "../Logics/EmployeeService"
import {ConcatPipe} from "../Pipes/concat.pipe"
import {MouseOverDirective} from "../Directives/mouseover.directive"
import {FormsModule} from "@angular/forms"
import {Http, HttpModule} from "@angular/http"

@NgModule(
    {
        declarations:[MouseOverDirective,
        ConcatPipe,
        EmployeeComponent,
        EmployeeAddComponent,
        EmployeeListComponent], //this line means Appcomponent is part of this Module
        exports:[EmployeeComponent],
        imports:[CommonModule,FormsModule,HttpModule],
        providers:[{provide:EmployeeService, useClass:EmployeeService}]
    }
)
export class EmployeeModule
{

}