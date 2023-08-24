import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent },
    // Pode adicionar mais rotas aqui, como uma página de login, etc.
    { path: '', redirectTo: '/user', pathMatch: 'full' }, // Redirecionar para /user por padrão
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }