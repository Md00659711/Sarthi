import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { LayoutComponent } from "./layout.component";
import { AuthenticationGuard } from "src/app/authguard/authentication.guard";

const route: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate:[AuthenticationGuard],
        canActivateChild:[AuthenticationGuard],    
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchComponentModule)
            },
            {
                path: 'list',
                loadChildren: () => import('./list/list.module').then(m => m.ListComponentModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class LayoutRouting { }