import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit{

  public articles: Article[] = [];
  public cargando: boolean = true;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let search = params['search'];

      this._articleService.search(search).subscribe(
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
      
    })
  }

}
