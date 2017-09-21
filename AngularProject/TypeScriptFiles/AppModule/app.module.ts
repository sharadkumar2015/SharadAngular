import {NgModule} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import {AppComponent,ProductComponent,CustomerComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"
import {EmployeeModule} from "../EmployeeModule/employee.module"
import {EmployeeComponent} from "../EmployeeModule/employee.component"

const c:Routes=[{path:'Product',component:ProductComponent},
                {path:'Employee',component:EmployeeComponent},
                {path:'Customer',component:CustomerComponent}
                ]
@NgModule(
    {
        imports:[BrowserModule,EmployeeModule,
            RouterModule.forRoot(c,{useHash:true})],
        declarations:[AppComponent,CustomerComponent,ProductComponent], //this line means Appcomponent is part of this Module
        bootstrap:[AppComponent] //This indicates this is root component, we can have more than 1 root component but ideally it should have only 1 root component
    }
)
export class AppModule
{

}