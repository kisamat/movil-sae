import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { RutasComponent } from '../pages/rutas/rutas.component';
import { EquivalenciasComponent } from '../pages/equivalencias/equivalencias.component';
import { AfinidadesComponent } from '../pages/afinidades/afinidades.component';

import {AuthenticationService} from '../app/services/authentication.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;


  pages: Array<{title: string, component: any, iconios: any, iconmd:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private _authenticationService:AuthenticationService,private iab: InAppBrowser) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeComponent,iconios: 'ios-home',iconmd:'md-home' },
      { title: 'Rutas Curriculares', component: RutasComponent,iconios: 'ios-git-network',iconmd:'md-git-network' },
      { title: 'Doble Titulación', component: AfinidadesComponent,iconios: 'ios-paper',iconmd:'md-paper' },
      { title: 'Equivalencias', component: EquivalenciasComponent,iconios: 'ios-swap',iconmd:'md-swap' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    this.nav.setRoot(page.component);
  }
  escuela(){
    this.iab.create('https://campus.virtual.unal.edu.co/','_system');
  }
  canalYoutube(){
    this.iab.create('https://www.youtube.com/channel/UCbMueewPIQ5U7jrlV_L4WgA/playlists','_self');
  }
  logout(){
      this._authenticationService.logout();
      this.nav.setRoot(LoginComponent);
  }
}
