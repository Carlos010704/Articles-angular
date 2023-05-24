import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/articles.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  // public article: Article[] = [];
  public article: Article = new Article(0, '', '', '', null);

  public url: string = '';
  public id: number = 0;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        (response) => {
          if (response.article) {
            this.article = response.article[0];
          } else {
            this._router.navigate(['/home']);
          }
        },
        (error) => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id: number) {
    Swal.fire({
      title: '¿Desea eliminar el articulo?',
      text: 'Una vez eliminado no se puede recuperar...',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          (response) => {
            // Alerta
            Swal.fire({
              title: 'Articulo Eliminado!!',
              text: 'El articulo se elimino correctamente...',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });

            this._router.navigate(['/home']);
          },
          (error) => {
            console.log(error);

            // Alerta
            Swal.fire({
              title: 'Error al eliminar!!',
              text: 'No se ha podido eliminar el articulo...',
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      }
    });
  }
}
