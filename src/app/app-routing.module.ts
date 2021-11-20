import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  redirectTo:'login',
},
{
  path: 'publicacoes',
  loadChildren: () => import('./publicacoes/publicacoes.module').then(m => m.PublicacoesModule)
},
{
  path: 'temas',
  loadChildren: () => import('./temas/temas.module').then(m => m.TemasModule)
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
