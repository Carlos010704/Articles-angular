import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  @Input() peliculas: Pelicula[] = [];

}
