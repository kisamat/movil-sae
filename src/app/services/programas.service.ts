import { Injectable } from '@angular/core';
import {Http, Headers, Response,ResponseOptions } from '@angular/http';
import {URL_API} from '../app.constants';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProgramasService {


  sedes:any=[];
  facultades:any=[];
  programas:any=[];
  url:any;


  urlSedes:string=`${URL_API}programas/programas/sedes`;
  urlFacultades:string=`${URL_API}programas/programas/facultades`;
  urlProgramas:string=`${URL_API}programas/programas/programas`;
  urlPrograma:string=`${URL_API}programas/programas/programa`;
  urlProgEquivalencia:string=`${URL_API}programas/programas/programasequivalencias`;
  urlEquivalencias:string=`${URL_API}programas/programas/equivalencias`;




  constructor(private http:Http) { }


  getSedes(){
    let headers = new Headers({
         'Content-Type':'application/json'
    });

    let url=this.urlSedes;
    return this.http.get(url,headers)
      .map(response => {
          console.log(response.json().data);
          return response.json().data;
      })
      .catch(e => {
          if (e.status === 400) {
              return ('Bad Request');
          }
        // do any other checking for statuses here
    });
  }
  getFacultades(idsede:number){
      let headers = new Headers({
           'Content-Type':'application/json'
      });
      let url=`${this.urlFacultades}/${ idsede }`

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


  getProgramas(idfacultad:number){
    let headers = new Headers({
         'Content-Type':'application/json'
    });
    let url=`${this.urlProgramas}/${ idfacultad }`

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


  getPrograma(cod_uniprograma:number){
    let headers = new Headers({
         'Content-Type':'application/json'
    });
    let url=`${this.urlPrograma}/${ cod_uniprograma }`
    //console.log("url="+url);
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
  getProgramasEquivalencias(cod_uniprograma?:number){
    let headers = new Headers({
         'Content-Type':'application/json'
    });

    if(cod_uniprograma){
        this.url=`${this.urlProgEquivalencia}/${cod_uniprograma}`;
    }else{
        this.url=`${this.urlProgEquivalencia}`;
    }
  //  console.log('servicio'+cod_uniprograma);
  //  console.log('servicio'+this.url);


    return this.http.get(this.url,headers)
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
  getEquivalencias(idprograma1:number,idprograma2:number){
    let headers = new Headers({
         'Content-Type':'application/json'
    });

    let url=`${this.urlEquivalencias}/${idprograma1}/${idprograma2}`;

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
