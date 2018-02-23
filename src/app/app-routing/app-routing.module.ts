import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from 'app/index/index.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { SigninComponent } from 'app/signin/signin.component';
import { RegisterComponent } from 'app/register/register.component';
import { PasswordForgottenComponent } from '../password-forgotten/password-forgotten.component';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { AuthGuard } from '../auth-guard.service';
import { SpielregelnComponent } from '../spielregeln/spielregeln.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'anmelden', component: SigninComponent },
  { path: 'registrieren', component: RegisterComponent },
  { path: 'forgot', canActivate: [AuthGuard], component:  PasswordForgottenComponent},
  { path: 'reset/:token', component:  PasswordResetComponent},
  {path: 'nicht-gefunden', component: PageNotFoundComponent},
  {path: 'spielregeln', component: SpielregelnComponent},
  {path: '**', redirectTo: '/nicht-gefunden'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
