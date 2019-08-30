import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import {FormsModule} from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard';

const appRoutes: Routes = [
  {
    path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent
  },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: '', component: AppareilViewComponent
  },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    BookPreviewComponent,
    Page1Component,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
