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

const appRoutes: Routes = [
  {
    path: 'appareils', component: AppareilViewComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: '', component: AppareilViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookPreviewComponent,
    Page1Component,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
