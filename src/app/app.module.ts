import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotbadgeComponent, SearchbotsComponent, SearchbotsortComponent, NavbarComponent, UserpanelComponent } from './components';
@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent,
    BotbadgeComponent,
    SearchbotsortComponent,
    SearchbotsComponent,
    UserpanelComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
