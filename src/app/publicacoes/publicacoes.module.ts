import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacoesRoutingModule } from './publicacoes-routing.module';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';


@NgModule({
  declarations: [
    PublicacoesComponent
  ],
  imports: [
    CommonModule,
    PublicacoesRoutingModule
  ]
})
export class PublicacoesModule { }
