import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./view/layout/layout.module')
      .then(m => m.LayoutModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: 'logout',
    loadChildren: () => import('./view/logout/logout.module')
      .then(m => m.LogoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
