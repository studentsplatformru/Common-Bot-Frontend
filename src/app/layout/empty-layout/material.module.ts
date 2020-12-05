import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatFormFieldModule, MatIconModule, MatInputModule],
  exports: [MatFormFieldModule, MatIconModule, MatInputModule],
})
export class MaterialModule {}
