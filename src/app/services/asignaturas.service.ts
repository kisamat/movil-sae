import { Injectable } from '@angular/core';
import { Http, Headers, Response,ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URL_API} from '../app.constants';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class AsignaturasService {
  rutas:any=[];

  urlBusqueda:string=`${URL_API}asignaturas/asignaturas/asignaturas`;
  url_ruta:string=`${URL_API}asignaturas/asignaturas/rutas`;


  constructor(private http:Http) { }


  getAsignaturas(termino:number,cod_uniprograma:number){


      let query= `/${termino}/${cod_uniprograma}`;
      let url=this.urlBusqueda + query;

      return this.http.get(url)
        .map(res=>{
              console.log(res.json().data);
              return res.json().data;
        })

  }
  getRuta(cod_ruta:number){
      let query= `/${cod_ruta}`;
      let url=this.url_ruta + query;
      //console.log(url);
      return this.http.get(url)
        .map(res=>{
              //console.log(res.json().data);
              return res.json().data;
        })

  }

}
