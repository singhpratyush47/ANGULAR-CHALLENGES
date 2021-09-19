import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { PipesMainComponent } from './pipes/pipes-main/pipes-main.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'directives',component:DirectiveDocumentationComponent},
  {path:'pipes',loadChildren:()=>import('./pipes/pipes.module').then((m)=>m.PipesModule)},
  {path:'services',component:ServiceDocumentationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
