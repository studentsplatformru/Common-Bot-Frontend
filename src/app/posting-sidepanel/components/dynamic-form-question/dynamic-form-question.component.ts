import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SettingsBase } from '../../models/settings-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
})
export class DynamicFormQuestionComponent {
  @Input() question: SettingsBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
