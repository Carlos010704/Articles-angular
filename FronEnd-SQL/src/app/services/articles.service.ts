import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { Injectable } from '@angular/core';

import { Global } from './global';

@Injectable()
export class ArticleService {
  public url: string = '';

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getArticles(last: boolean = false): Observable<any> {
    var articles = 'articles';
    if (last) {
      return this._http.get(this.url + articles + '-last');
    } else {
      return this._http.get(this.url + articles);
    }
  }

  getArticle(articleId: number):Observable<any> {
    return this._http.get(this.url + 'article/' + articleId);
  }

  search(searchString: string): Observable<any>{
    return this._http.get(this.url + 'search/' + searchString);
  }

  create(article: any): Observable<any>{
    let params = JSON.stringify(article);    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.post(this.url + 'save', params, {headers: headers});    
  }

  update(id: number, article: any):Observable<any>{
    let params = JSON.stringify(article); 
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + 'article/' + id, params, {headers: headers});
  }

  delete(id: number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + 'article/' + id, {headers: headers});
  }

}
