import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostingComponent } from './containers/new-posting/new-posting.component';

const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'new-post',
    component: NewPostingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostingRoutingModule {}
