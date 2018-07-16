import { Component, OnInit } from '@angular/core';
import {NavController, AlertController,LoadingController,Loading} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as CryptoJS from 'crypto-js';
import {AuthenticationService} from '../../app/services/authentication.service';
import {HomeComponent} from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user_login:string='';
  user_password:string='';
  password:string='';
  error:number=0;
  constructor(public nav:NavController,  public alertCtrl:AlertController,public loadingCtrl:LoadingController,private _authenticationService:AuthenticationService,private iab: InAppBrowser) {
  }

  ngOnInit() {
    // reset login status
    this._authenticationService.logout();
  }


  login(user_login, user_password) {

    if (user_login == '' || user_password == '')
    {
      this.alertConnexionError();
      return;
    }

    let loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });

    loading.present();

    // Server authentication.
    let temp= CryptoJS.enc.Utf8.parse(user_password)
    this.password = CryptoJS.enc.Base64.stringify(temp);
    this._authenticationService.login(user_login,this.password).subscribe(result => {
        loading.dismiss();
        if (result ) {
           //console.log(result);
              // login successful
              this.nav.setRoot(HomeComponent);
        }else {
          this.alertConnexionError();
          return;
      }
    });
  }

  alertConnexionError() {
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Usuario o contraseña incorrecta.',
        buttons: ['OK']
      });
      alert.present();
  }

  politicas(){
    this.iab.create('http://www.sae.unal.edu.co/rutas/#/politicas','_system');
  }

}
