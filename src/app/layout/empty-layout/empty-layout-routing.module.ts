import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent, LoginComponent } from '../../components';
import { EmptyLayoutComponent } from './empty-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

export const routedComponents = [
  LoginComponent,
  RegisterComponent,
  EmptyLayoutComponent,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyLayoutRoutingModule {}
