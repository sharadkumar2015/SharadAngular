import {NgModule} from "@angular/core"
import {AppComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"

@NgModule(
    {
        imports:[BrowserModule],
        declarations:[AppComponent], //this line means Appcomponent is part of this Module
        bootstrap:[AppComponent] //This indicates this is root component
    }
)
export class AppModule
{

}