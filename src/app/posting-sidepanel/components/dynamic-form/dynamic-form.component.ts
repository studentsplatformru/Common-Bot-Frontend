import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SettingsBase } from '../../models/settings-base';
import { SettingsControlService } from '../../services/settings-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: SettingsBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: SettingsControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
