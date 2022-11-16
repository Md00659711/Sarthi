import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ListComponent } from "./list.component";
const route : Routes = [
    {
        path:'',
        component:ListComponent,       
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class ListComponentRouting { }