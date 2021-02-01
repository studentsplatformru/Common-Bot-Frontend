import { SettingsBase } from './settings-base';

export class CheckboxSettings extends SettingsBase<string> {
  controlType = 'checkbox';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
