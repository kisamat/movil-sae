import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, AlertController,LoadingController,Loading } from 'ionic-angular';
import {ProgramasService} from '../../app/services/programas.service';

@Component({
  selector: 'app-equivalencias',
  templateUrl: './equivalencias.component.html',
  styles: ['.card-md { width:100%; }']
})
export class EquivalenciasComponent implements OnInit {

  programasOrigen:any=[];
  programasDestino:any=[];
  equivalencias:any=[];
  idprograma1:number;
  idprograma2:number;
  loading:boolean=true;
  toolTipText:string="La fuente de las equivalencia publicadas en el aplicativo son las resoluciones de doble titulación aprobadas por los Consejos de Sede del 2009 al 2015. Esta información será actualizada periodicamente.";
  limit: number = 250;
  truncating = true;

  constructor(private _programas:ProgramasService,public loadingCtrl:LoadingController) {
      this.listarProgramas();
  }

  ngOnInit() {}

  listarProgramas(){
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Cargando ...'
      });

      loading.present();

      this._programas.getProgramasEquivalencias()
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.programasOrigen= data;
                  loading.dismiss();
              }, 1000);

          });


  }
  listarProgramasDestino(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando ...'
    });

    loading.present();

      this._programas.getProgramasEquivalencias(this.idprograma1)
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.programasDestino= data;
                  loading.dismiss();
              }, 1000);
          loading.dismiss();
        });

  }
  listarEquivalencias(){
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Cargando ...'
      });

      loading.present();
     //console.log(this.idprograma1);
     //console.log(this.idprograma2);
     this._programas.getEquivalencias(this.idprograma1,this.idprograma2)
         .subscribe(data=>{
             setTimeout(()=> {
                 this.loading=false
                 this.equivalencias= data;
                 loading.dismiss();
             }, 1000);
         })
  }

}
