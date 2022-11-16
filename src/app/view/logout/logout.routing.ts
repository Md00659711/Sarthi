import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { LogoutComponent } from "./logout.component";

const route : Routes = [
    {
        path:'',
        component:LogoutComponent,       
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class LogoutRouting { }