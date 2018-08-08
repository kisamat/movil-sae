import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {URL_API} from '../app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class RutasService {
  rutas:any=[];

  //urlBusqueda:string='http://www.pregrado.unal.edu.co/pruebas/rutas/rutas/rutas/rutas';
  urlBusqueda:string=`${URL_API}rutas/rutas/rutas`;


  constructor(private http:Http) { }


  getRutas(termino:number){
      let headers = new Headers({
           'Content-Type':'application/json'
      });

      let url=`${this.urlBusqueda}/${ termino }`

      return this.http.get(url,headers)
        .map((response) => {
            //console.log(response.json().data);
            return response.json().data;
        })
        .catch(e => {
            if (e.status === 400) {
                return ('Bad Request');
            }
          // do any other checking for statuses here
        });

  }

}
