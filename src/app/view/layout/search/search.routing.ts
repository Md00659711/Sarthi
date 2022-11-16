import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { SearchComponent } from "./search.component";
const route : Routes = [
    {
        path:'',
        component:SearchComponent,       
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class SearchComponentRouting { }