import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostingComponent } from './components/new-posting/new-posting.component';

import { NgxEditorJSModule } from '@tinynodes/ngx-editorjs';

@NgModule({
  imports: [
    CommonModule,
    NgxEditorJSModule.forRoot({
      // Optional Configuration, see all keys below
      editorjs: {
        autofocus: false,
        holder: 'editor',
        initialBlock: 'paragraph',
        data: {
          time: Date.now(),
          blocks: [],
        },
      },
    }),
  ],
  declarations: [NewPostingComponent],
})
export class PostingModule {}
