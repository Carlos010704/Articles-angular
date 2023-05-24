import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/articles.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticleService],
})
export class NewArticleComponent implements OnInit {
  public article: Article;
  public articulo: any;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article(0, '', '', '', null);
  }
  ngOnInit(): void {}

  goCreate() {
    this._articleService.create(this.article).subscribe(
      (response) => {
        this.article = response;

        // Alerta
        Swal.fire({
          title: 'Articulo Creado!!',
          text: 'El articulo se ha creado correctamente...',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });

        this._router.navigate(['/blog']);
      },
      (error) => {
        console.log(error);
      }
    );
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

  imageUpload(data: any) {
    let image_data = data.body;
    this.article.file0 = image_data.image;
  }
}
