import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainLayoutComponent },
  {
    path: 'auth',
    loadChildren: () => import('./layout/empty-layout/empty-layout.module').then(m => m.EmptyLayoutModule)
  }
];

export const routedComponents = [MainLayoutComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
