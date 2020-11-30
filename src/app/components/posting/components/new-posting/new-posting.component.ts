import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

@Component({
  selector: 'app-new-posting',
  templateUrl: './new-posting.component.html',
  styleUrls: ['./new-posting.component.scss'],
})
export class NewPostingComponent implements OnInit, AfterViewInit {
  @ViewChild('editorJs') el: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setEditorConfig();
  }

  setEditorConfig(): void {
    const editor = new EditorJS({
      holder: this.el.nativeElement,
      tools: {
        header: Header,
        list: List,
      },
    });
  }
}
