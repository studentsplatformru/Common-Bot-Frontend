import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
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
  public dateOption: string | number = 1;
  public deleteOption: string | number = 1;
  public showDateControls: boolean = false;
  public showDeleteControls: boolean = false;
  public daySelected: FormControl = new FormControl(0);
  public hourSelected: FormControl = new FormControl(1);

  public days: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  ngOnInit(): void {}

  rofl(event: MatRadioChange): void {
    console.log('event:', event.source.checked);
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
}
