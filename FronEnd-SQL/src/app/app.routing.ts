// Importar modulos de rutas
import { ModuleWithProviders } from "@angular/core";
import { Routes ,RouterModule } from "@angular/router";

// Importar componentes que tendran rutas
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { NofountComponent } from "./components/nofount/nofount.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { NewArticleComponent } from "./components/new-article/new-article.component";
import { EditArticleComponent } from "./components/edit-article/edit-article.component";

// Se crean las rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/article/:id', component: ArticleComponent },
    { path: 'new-article', component: NewArticleComponent },
    { path: 'edit-article/:id', component: EditArticleComponent },
    { path: 'search/:search', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: '**', component: NofountComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);