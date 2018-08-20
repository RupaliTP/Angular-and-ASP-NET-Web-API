import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';

import { EmployeeService } from './employee/employee.service'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:ID', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeCountComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers:[EmployeeService]
})
export class AppModule { }
