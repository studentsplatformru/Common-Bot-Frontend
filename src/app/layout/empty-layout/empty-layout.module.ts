import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { routedComponents } from './empty-layout-routing.module';
import { EmptyLayoutRoutingModule } from './empty-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    HttpClientModule,
    EmptyLayoutRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EmptyLayoutModule {}
