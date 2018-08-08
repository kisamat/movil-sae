import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';

import { HomeComponent } from '../pages/home/home.component';
import {LoginComponent} from '../pages/login/login.component';
import {RutasComponent} from '../pages/rutas/rutas.component';
import {AsignaturasComponent} from '../pages/asignaturas/asignaturas.component';
import {EquivalenciasComponent} from '../pages/equivalencias/equivalencias.component';
import {AfinidadesComponent} from '../pages/afinidades/afinidades.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthenticationService } from './services/authentication.service';
import { ProgramasService } from './services/programas.service';
import { RutasService } from './services/rutas.service';
import {AsignaturasService} from './services/asignaturas.service';
import {AfinidadesService} from './services/afinidades.service';
import { TruncatePipe } from '../pipes/truncate.pipe';



@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    LoginComponent,
    RutasComponent,
    AsignaturasComponent,
    EquivalenciasComponent,
    AfinidadesComponent,
    TruncatePipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TooltipsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    LoginComponent,
    RutasComponent,
    AsignaturasComponent,
    EquivalenciasComponent,
    AfinidadesComponent
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    AuthenticationService,
    ProgramasService,
    RutasService,
    AsignaturasService,
    AfinidadesService,
    /*provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('id_token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    }),*/
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
