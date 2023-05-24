import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/articles.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit{

  public articles: Article[] = [];
  public url: string = '';
  public cargando: boolean = true;

  constructor(
    private _articleService: ArticleService
  ){
    this.url = Global.url;
  }

  ngOnInit() {
    this._articleService.getArticles(true).subscribe(      
      response => {
        if(response.articles){
          this.articles = response.articles; 
          this.cargando = true;             
        }
      },
      error => {
        console.log(error); 
        this.cargando = false;
      }
    )
  }

}
