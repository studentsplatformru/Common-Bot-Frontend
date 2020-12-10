import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
          right: '-27px',
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
export class NewPostingComponent implements OnInit {
  public postForm: FormGroup;
  public isOpen: boolean = false;
  public settingsFormValid: boolean = false;
  public publicationPlanned: boolean = false;
  public options: Object = {
    toolbarInline: true,
    placeholderText: 'Выберите инструмент слева',
    autofocus: true,
  };

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      alert('Данные фомры отправлены');
      return;
    } else if (!this.settingsFormValid) {
      this.isOpen = true;
    }
  }

  createForm(): void {
    this.postForm = new FormGroup({
      editor: new FormControl('', [Validators.required]),
      publicationSettings: new FormControl('', [Validators.required]),
    });
  }
}
