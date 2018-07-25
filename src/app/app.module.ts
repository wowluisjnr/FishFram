import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApresentacaoPage } from '../pages/apresentacao/apresentacao';
import { BemVindoPage } from '../pages/bem-vindo/bem-vindo';
import { LoginPage } from '../pages/login/login';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    ApresentacaoPage,
    BemVindoPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    ApresentacaoPage,
    BemVindoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
