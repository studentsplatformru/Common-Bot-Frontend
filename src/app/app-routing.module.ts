import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: MainLayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layout/empty-layout/empty-layout.module').then(
        (m) => m.EmptyLayoutModule
      ),
  },
  {
    path: 'posting',
    loadChildren: () =>
      import('./components/posting/posting.module').then(
        (m) => m.PostingModule
      ),
  },
];

export const routedComponents = [MainLayoutComponent, EmptyLayoutComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
