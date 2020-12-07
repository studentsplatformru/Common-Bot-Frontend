import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [],
})
export class SharedModule {}
