import { Injectable } from '@angular/core';
import { Http, Headers, Response,ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URL_API} from '../app.constants';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class AfinidadesService {
  rutas:any=[];

  urlBusqueda:string=`${URL_API}afinidades/afinidades/afinidades`;



  constructor(private http:Http) { }


   getAfinidades(termino:number){
     let headers = new Headers({
          'Content-Type':'application/json'
     });

      let query= `/${termino}/${termino}`;
      let url=this.urlBusqueda + query;

      return this.http.get(url,headers)
        .map(res=>{
              console.log(res.json().data);
              return res.json().data;
        })

  }


}
