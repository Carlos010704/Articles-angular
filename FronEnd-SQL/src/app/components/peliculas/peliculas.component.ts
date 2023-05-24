import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pelicula[] = [];

  constructor(
    private _peliculaService: PeliculaService
  ){
    this.peliculas = this._peliculaService.getPeliculas();
  }
  ngOnInit(): void {
  }

}
 