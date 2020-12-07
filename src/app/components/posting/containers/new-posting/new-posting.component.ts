import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-posting',
  templateUrl: './new-posting.component.html',
  styleUrls: ['./new-posting.component.scss'],
  animations: [
    trigger('openPanel', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('open => closed', [animate('200ms')]),
      transition('closed => open', [animate('200ms')]),
    ]),
    trigger('moveExpandButton', [
      state(
        'not-moved',
        style({
          right: '-15px',
        })
      ),
      state(
        'moved',
        style({
          right: '284px',
        })
      ),
      transition('not-moved => moved', [animate('200ms')]),
      transition('moved => not-moved', [animate('200ms')]),
    ]),
  ],
})
export class NewPostingComponent implements OnInit, AfterViewInit {
  public postForm: FormGroup;
  public isOpen: boolean = true;
  public options: Object = {
    toolbarInline: true,
    placeholderText: 'Выберите инструмент слева',
    autofocus: true,
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createForm();
  }

  onSubmit(): void {
    this.createForm();
  }

  createForm(): void {
    this.postForm = new FormGroup({
      editor: new FormControl(''),
    });
  }
}
