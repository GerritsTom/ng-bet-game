import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { DataService } from 'app/data.service';
import { PasswordForgottenComponent } from './password-forgotten/password-forgotten.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './auth-guard.service';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SigninComponent,
    PasswordForgottenComponent,
    PasswordResetComponent,
    SpielregelnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
