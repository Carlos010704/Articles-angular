import { Injectable } from "@angular/core";
import { Pelicula } from "../model/pelicula";

@Injectable()
export class PeliculaService{

public peliculas: Pelicula[] = [];

constructor(){
    this.peliculas = [
        new Pelicula('Avatar', 'https://img.asmedia.epimg.net/resizer/fekC_3_4K2Ukao2WyV0B6Po7Xc0=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SPN5GQJ5VVIJFI6UPK7NP2PCLI.jpg'),
        new Pelicula('Avatar 2: The Way of Water', 'https://www.nacion.com/resizer/N-t2hL9piRaiSibpvQVE266SXKw=/arc-anglerfish-arc2-prod-gruponacion/public/DFFLHUVNEJGYFESCBUN74Z3UGQ.jpg'),
        new Pelicula('Mario Bros: La Película', 'https://www.semana.com/resizer/SN8JkIb_nwN4Vv-czJdwRQ0819c=/1920x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/RZ2T42SWGRB5FIQFUGUM3QMGIE.jpg')
      ];  
}

getPeliculas(){
    return this.peliculas;
  }

}