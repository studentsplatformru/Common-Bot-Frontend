import { Injectable } from '@angular/core';

import { CheckboxSettings } from '../models/settings-checkbox';
import { SettingsBase } from '../models/settings-base';
import { OptionsSettings } from '../models/settings-options';
import { of } from 'rxjs';

@Injectable()
export class OptionsService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: SettingsBase<string>[] = [
      new CheckboxSettings({
        key: 'channels',
        label: 'Каналы для публикации',
        options: [
          { key: 'freeTelegram', value: 'Free Telegram' },
          { key: 'halyava', value: 'На Халяву' },
          { key: 'wrecipes', value: 'Рецепты Мира' },
        ],
        order: 1,
      }),

      new CheckboxSettings({
        key: 'accounts',
        label: 'Пользователи для публикации',
        options: [
          { key: 'galex', value: 'Гаврилов Алексей' },
          { key: 'ivanpet', value: 'Петрохин Иван' },
          { key: 'antolg', value: 'Антюхина Ольга' },
        ],
        order: 2,
      }),

      new OptionsSettings({
        key: 'postingTime',
        label: 'Дата и время публикации',
        options: [
          { key: 'now', value: 'Сейчас' },
          { key: 'setPostTime', value: 'Установить время' },
        ],
        order: 3,
      }),

      new OptionsSettings({
        key: 'deletionTime',
        label: 'Удалить пост',
        options: [
          { key: 'dontDelete', value: 'Не удалять' },
          { key: 'setDeleteTime', value: 'Установить время' },
        ],
        order: 4,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
