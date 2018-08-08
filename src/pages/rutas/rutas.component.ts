import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController,Loading } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {RutasService} from '../../app/services/rutas.service';
import {ProgramasService} from '../../app/services/programas.service';
import {AsignaturasComponent} from '../asignaturas/asignaturas.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';


@Component({
  selector: 'app-rutas',
  templateUrl: 'rutas.component.html'
})

export class RutasComponent implements OnInit {
  idsede:string;
  idfacultad:string;
  idprograma:number;
  sedes:any=[];
  facultades:any=[];
  programas:any=[];
  rutasPrograma:any[];
  loading:boolean=true;
  programa_actual:String="";
  toolTipText:string="Las Rutas Curriculares Son los trayectos que el estudiante encuentra dentro del plan de estudios que visibilizan las oportunidades académicas que le permitirán la consecución de sus intereses y necesidades de formación. Las rutas contienen la información de asignaturas optativas y de libre elección, que están articuladas con los objetivos del programa, campos de acción profesional y perfiles del egresado, facilitando que el estudiante oriente la elección de asignaturas con miras al ejercicio futuro de su profesión.";
  limit: number = 40;
  truncating = true;


  constructor(private _rutas:RutasService, private _programas:ProgramasService,private navCtrl: NavController,public loadingCtrl:LoadingController) {

    /*if(localStorage.getItem('cod_uniprograma')!=null){
       this.idprograma=parseInt(localStorage.getItem('cod_uniprograma'));
       this.idsede=localStorage.getItem('idsede');
       this.idfacultad=localStorage.getItem('idfacultad');
       this.listarFacultades();
       this.listarProgramas();
       this.verRutasPrograma();
       //this.obtenerPrograma(this.idprograma);
    }*/

    this.listarSedes();
  }
  ngOnInit() { }
/*
  public enviar(formPrograma: NgForm) {
      this.idprograma=formPrograma.controls['listaProgramas'].value;
      localStorage.removeItem("cod_uniprograma");
      this.verRutasPrograma();

  }
*/
  listarSedes(){
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Cargando ...'
      });

      loading.present();
      this._programas.getSedes()
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.sedes= data;
                  loading.dismiss();
              }, 1000)
          })

  }
  listarFacultades(){
      //console.log(this.idsede);
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Cargando ...'
      });

      loading.present();
      //localStorage.setItem('idsede',this.idsede.toString());
      this._programas.getFacultades(parseInt(this.idsede))
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.facultades= data;
                  loading.dismiss();
              }, 1000)
          });

  }
  listarProgramas(){
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Cargando ...'
      });

      loading.present();
      //console.log(this.idfacultad);
      //localStorage.setItem('idfacultad',this.idfacultad.toString());
      this._programas.getProgramas(parseInt(this.idfacultad))
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.programas= data;
                  loading.dismiss();
              }, 1000)
          });
  }

  verRutasPrograma(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando ...'
    });

    loading.present();
    this.obtenerPrograma(this.idprograma);
    //console.log(this.idprograma);
    if(this.idprograma){
      this._rutas.getRutas(this.idprograma)
          .subscribe(data=>{
              setTimeout(()=> {
                  this.loading=false
                  this.rutasPrograma= data;
                  loading.dismiss();
              }, 1000)
          });
    }
  }

  obtenerPrograma(idprograma){
      this._programas.getPrograma(idprograma)
          .subscribe(data=>{
                  localStorage.setItem('programaactual',data.programa);
          });
  }
  verAsignaturas(cod_ruta,idprograma){
      this.navCtrl.push(AsignaturasComponent, {cod_ruta,idprograma}, {animate: true, direction: 'forward'});
  }


}
