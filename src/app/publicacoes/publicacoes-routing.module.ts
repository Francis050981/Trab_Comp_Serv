import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
const routes: Routes = [{
  path:'',
  component: PublicacoesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacoesRoutingModule { }
