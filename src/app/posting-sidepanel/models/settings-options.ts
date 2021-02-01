import { SettingsBase } from './settings-base';

export class OptionsSettings extends SettingsBase<string> {
  controlType = 'options';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
