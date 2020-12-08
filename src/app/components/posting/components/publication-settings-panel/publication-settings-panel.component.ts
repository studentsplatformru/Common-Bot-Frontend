import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { TelegramChat } from '../../models/telegram-chat.interface';

@Component({
  selector: 'app-publication-settings-panel',
  templateUrl: './publication-settings-panel.component.html',
  styleUrls: ['./publication-settings-panel.component.scss'],
})
export class PublicationSettingsPanelComponent implements OnInit {
  public isToggleAll: boolean = false;
  public counter: number = 3;
  public showDateControls: boolean = false;
  public showDeleteControls: boolean = false;
  public settingsForm: FormGroup;

  public days: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public hours: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
  ];

  public chats: TelegramChat[] = [
    {
      text: 'Free Telegram',
      id: 1,
    },
    {
      text: 'На халяву',
      id: 2,
    },
    {
      text: 'Рецепты мира',
      id: 3,
    },
    {
      text: 'Free Telegram',
      id: 4,
    },
    {
      text: 'На халяву',
      id: 5,
    },
    {
      text: 'Рецепты мира',
      id: 6,
    },
  ];

  private selectedChats: TelegramChat[] = [];

  constructor() {}

  ngOnInit(): void {
    this.createForm();
    setInterval(() => {
      console.log('this.settingsForm.valid:', this.settingsForm.valid);
    }, 2000);
  }

  createForm(): void {
    this.settingsForm = new FormGroup({
      chats: new FormArray([], [Validators.required]),
      dateControls: new FormControl('1'),
      deleteControls: new FormControl('1'),
      dateGroup: new FormGroup({
        date: new FormControl(null),
        time: new FormControl(null),
      }),
      deleteGroup: new FormGroup({
        day: new FormControl(null),
        hour: new FormControl(null),
      }),
    });
  }

  timeChange(flag: boolean): void {
    const { date, time } = this.settingsForm.controls.dateGroup.controls;
    if (flag) {
      date.setValidators([Validators.required]);
      time.setValidators([Validators.required]);
      date.updateValueAndValidity();
      time.updateValueAndValidity();
      this.showDateControls = true;
    } else {
      date.setValidators(null);
      time.setValidators(null);
      date.updateValueAndValidity();
      time.updateValueAndValidity();
      this.showDateControls = false;
    }
  }

  deleteChange(flag: boolean): void {
    const { day, hour } = this.settingsForm.controls.deleteGroup.controls;
    if (flag) {
      day.setValidators([Validators.required]);
      hour.setValidators([Validators.required]);
      day.updateValueAndValidity();
      hour.updateValueAndValidity();
      this.showDeleteControls = true;
    } else {
      day.setValidators(null);
      hour.setValidators(null);
      day.updateValueAndValidity();
      hour.updateValueAndValidity();
      this.showDeleteControls = false;
    }
  }

  toggle(chat: TelegramChat, event: MatCheckboxChange): void {
    this.isChecked();
    if (event.checked) {
      this.selectedChats.push(chat);
    } else {
      const index = this.selectedChats.indexOf(chat);
      if (index >= 0) {
        this.selectedChats.splice(index, 1);
      }
    }
  }

  isIndeterminate(): boolean {
    return this.selectedChats.length > 0 && !this.isChecked();
  }

  isChecked(): boolean {
    return this.selectedChats.length === this.chats.length;
  }

  exists(chat: TelegramChat): boolean {
    return this.selectedChats.indexOf(chat) > -1;
  }

  toggleAll(event: MatCheckboxChange): void {
    if (event.checked) {
      this.chats.forEach((chat: TelegramChat) => {
        this.selectedChats.push(chat);
      });
    } else {
      this.selectedChats.length = 0;
    }
  }

  showMore(): void {
    this.counter += 3;
  }

  checkboxChange(event, chat: TelegramChat): void {
    const formArray: FormArray = this.settingsForm.controls[
      'chats'
    ] as FormArray;

    if (event.checked) {
      formArray.push(new FormControl(event.value));
    } else {
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
}
