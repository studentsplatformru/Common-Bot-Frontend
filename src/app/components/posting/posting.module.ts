import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingRoutingModule } from './posting-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostingComponent } from './containers/new-posting/new-posting.component';
import { PublicationSettingsPanelComponent } from './components/publication-settings-panel/publication-settings-panel.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import 'froala-editor/js/plugins.pkgd.min.js';

@NgModule({
  imports: [
    CommonModule,
    PostingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [NewPostingComponent, PublicationSettingsPanelComponent],
})
export class PostingModule {}
