import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './_helpers';
import {
  BotbadgeComponent,
  SearchbotsComponent,
  SearchbotsortComponent,
  NavbarComponent,
  UserpanelComponent,
} from './components';
import { DynamicFormQuestionComponent } from './posting-sidepanel/components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './posting-sidepanel/components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent,
    BotbadgeComponent,
    SearchbotsortComponent,
    SearchbotsComponent,
    UserpanelComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
