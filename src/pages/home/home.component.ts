import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {RutasComponent} from '../rutas/rutas.component';
import {EquivalenciasComponent} from '../equivalencias/equivalencias.component';
import {AfinidadesComponent} from '../afinidades/afinidades.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
  export class HomeComponent {

    constructor(public navCtrl: NavController,private iab: InAppBrowser) {


  }

  pagina(id:number){
    switch(id) {
       case 1: {
          this.navCtrl.setRoot(RutasComponent);
          break;
       }
       case 2: {
          this.navCtrl.setRoot(AfinidadesComponent);
          //this.navCtrl.push(RutasComponent);
          break;
       }
       case 3: {
          this.navCtrl.setRoot(EquivalenciasComponent);
          //this.navCtrl.push(RutasComponent);
          break;
       }
    }
  }

  escuela(){
    this.iab.create('https://campus.virtual.unal.edu.co/mod/data/view.php?d=314&rid=1417','_system');
  }
  canalYoutube(){
    this.iab.create('https://www.youtube.com/channel/UCbMueewPIQ5U7jrlV_L4WgA/playlists','_self');
  }

}
