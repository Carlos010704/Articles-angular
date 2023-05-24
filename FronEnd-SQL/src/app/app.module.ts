import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BlogComponent } from './components/blog/blog.component';
import { NofountComponent } from './components/nofount/nofount.component';
import { PeliculaService } from './services/peliculas.service';
import { ArticlesComponent } from './components/articles/articles.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    FormularioComponent,
    PeliculasComponent,
    BlogComponent,
    NofountComponent,
    ArticlesComponent,
    PeliculaComponent,
    ArticleComponent,
    SearchComponent,
    NewArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders, PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
