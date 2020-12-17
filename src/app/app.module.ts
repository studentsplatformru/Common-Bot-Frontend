import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotbadgeComponent, SearchbotsComponent, SearchbotsortComponent, NavBarComponent, LoginComponent, RegisterComponent, UserpanelComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    BotbadgeComponent,
    SearchbotsComponent,
    SearchbotsortComponent,
    UserpanelComponent,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
