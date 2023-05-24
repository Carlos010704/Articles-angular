import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public searchString: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  goSearch(){
    this._router.navigate(['/search', this.searchString]);
  }

}
