import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './auth.guard';
import {
  BotbadgeComponent,
  SearchbotsComponent,
  SearchbotsortComponent,
  UserpanelComponent,
} from './components';

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
    HttpClientModule,
  ],
  providers: [
    AuthService,
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
