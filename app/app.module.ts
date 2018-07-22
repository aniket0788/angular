import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [
        AppComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}