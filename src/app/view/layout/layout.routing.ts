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
            },
            {
                path: 'assign',
                loadChildren: () => import('./assign/assign.module').then(m => m.AssignModule)
            },
            {
                path: 'birthday',
                loadChildren: () => import('./birthday/birthday.module').then(m => m.BirthdayModule)
            },
            {
                path: 'festival',
                loadChildren: () => import('./festival/festival.module').then(m => m.FestivalModule)
            },
            {
                path: 'notification',
                loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
            }
        ] 
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class LayoutRouting { }