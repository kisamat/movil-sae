import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, AlertController,LoadingController,Loading } from 'ionic-angular';
import { ProgramasService } from '../../app/services/programas.service';
import { AfinidadesService } from '../../app/services/afinidades.service';


@Component({
  selector: 'app-afinidades',
  templateUrl: './afinidades.component.html'
})
export class AfinidadesComponent implements OnInit {

  idsede:string;
  idfacultad:string;
  idprograma:number;
  sedes:any=[];
  facultades:any=[];
  programas:any=[];
  afinidades:any=[];
  loading:boolean=true;
  toolTipText:string="El Análisis de Afinidades entre planes de estudio es un insumo que sirve para guiar a los estudiantes en el diseño de posibles rutas curriculares y en las posibilidades de doble titulación. El resultado de este análisis es un listado de planes de estudio con los cuales es posible realizar una doble titulación Este análisis se basa en el número de créditos comunes entre planes, el cual se compone de: (i) créditos de asignaturas comunes, (ii) créditos de libre elección y (iii) créditos ganados e invertidos en un segundo plan. La tabla que muestra los resultados, ilustra para cada programa donde es posible realizar una doble titulación, el número de créditos exigidos en un segundo plan, el número de créditos comunes y el número de créditos excedentes correspondiente a la diferencia entre los créditos comunes y los créditos en el segundo plan. Los programas destino se ordenan de acuerdo al número de créditos excedentes, de forma tal que se muestra prioritariamente a los programas con los cuales se tiene una mayor holgura para realizar una doble titulación.";
  limit: number = 40;
  truncating = true;

  constructor(private navCtrl: NavController,private navParams:NavParams,private _programas:ProgramasService, private _afinidades:AfinidadesService,public loadingCtrl:LoadingController) {

    this.listarSedes();
  }

  ngOnInit() {}


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
        this._programas.getProgramas(parseInt(this.idfacultad))
            .subscribe(data=>{
                setTimeout(()=> {
                    this.loading=false
                    this.programas= data;
                    loading.dismiss();
                }, 1000)
            });
    }


  listarAfinidades(){
    // console.log(this.idprograma1);
    // console.log(this.idprograma2);
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Cargando ...'
      });

      loading.present();
     this._afinidades.getAfinidades(this.idprograma)
         .subscribe(data=>{
             setTimeout(()=> {
                 this.loading=false
                 this.afinidades= data;
                 loading.dismiss();
                 //console.log(data);
             }, 1000)
         })
  }

}
