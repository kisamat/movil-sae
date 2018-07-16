import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, AlertController,LoadingController,Loading } from 'ionic-angular';
import {AsignaturasService} from '../../app/services/asignaturas.service';
import {RutasService} from '../../app/services/rutas.service';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html'
})
export class AsignaturasComponent implements OnInit {
  asignaturas:any=[];
  id:number;
  cod_uniprograma:number;
  loading:boolean=true;
  programa_actual:any=localStorage.getItem('programaactual');
  nombre_ruta:any;

  constructor(private _asignaturas:AsignaturasService,private navCtrl: NavController,private navParams:NavParams,private _rutas:RutasService,public loadingCtrl:LoadingController) {

    //console.log("prueba2="+JSON.stringify(this.programa_actual));

        //console.log(parametros);
        this.id=this.navParams.get('cod_ruta');
        this.cod_uniprograma=this.navParams.get('idprograma');

        if(this.id){
              let loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Cargando ...'
              });

              loading.present();
              this.obtenerRuta(this.id);
              this._asignaturas.getAsignaturas(this.id, this.cod_uniprograma)
                  .subscribe(data=>{
                        setTimeout(()=> {
                            this.loading=false
                            this.asignaturas= data;
                            loading.dismiss();
                        }, 1000)
                  })
        }


  }

  ngOnInit() {}

  obtenerRuta(cod_ruta){
      this._asignaturas.getRuta(cod_ruta)
          .subscribe(data=>{
                  //localStorage.setItem('programaactual',data.programa);
                  //console.log(data.nombre_ruta);
                  this.nombre_ruta=data.nombre_ruta;

          });
  }

}
