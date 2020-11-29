import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainLayoutComponent },
  { path: 'auth', component: EmptyLayoutComponent },
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
