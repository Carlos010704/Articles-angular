import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/articles.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService],
})
export class EditArticleComponent {
  public article: Article;
  public articulo: any;
  public is_edit: boolean;
  public url: string;

  public id: number = 0;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article(0, '', '', '', null);
    this.is_edit = true;
    this.url = Global.url;
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];

      this._articleService.getArticle(this.id).subscribe(
        (response) => {
          if (response.article) {
            this.article = response.article[0];
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  afuConfig: any = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .jepg, .gif',
    maxSize: '50',
    uploadAPI: {
      url: Global.url + 'upload-image',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Selecciona una imagen...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit',
    },
  };

  goUpdate() {
    this._articleService.update(this.article.id, this.article).subscribe(
      (response) => {
        this.article = response;

        // Alerta
        Swal.fire({
          title: 'Articulo Actualizado!!',
          text: 'El articulo se ha actualizado correctamente...',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });

        this._router.navigate(['/blog/article/', this.id]);
      },
      (error) => {
        console.log(error);
        Swal.fire({
          title: 'Error al actualizar!!',
          text: 'No se ha podido actualizar el articulo...',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  imageUpload(data: any) {
    let image_data = data.body;
    this.article.file0 = image_data.image;
  }
}
