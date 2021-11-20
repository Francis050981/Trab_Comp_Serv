import { Component, OnInit } from '@angular/core';
import { Publicacoes } from '../models/publicacoes';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})



export class PublicacoesComponent implements OnInit {

  publicacao:Publicacoes[] = [
    {
      _id:'1',  
      autor: 'Cacio',  
      titulo: 'Programação',
      postagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet aliquam quam. Cras sit amet libero sed ipsum mattis aliquet. Curabitur nunc leo, fringilla sed sollicitudin at, tempus non enim. Pellentesque luctus dui a ex accumsan tempus. Aliquam erat volutpat. Proin lorem tortor, facilisis non bibendum vitae, sollicitudin in diam. Sed a odio eu ante venenatis mattis non in sem. Mauris luctus elementum molestie. Aenean accumsan nisl mi, semper vehicula erat aliquet vitae. Mauris ornare viverra tempor. Nulla sit amet condimentum ante, eget eleifend dolor. Fusce metus mauris, volutpat nec porta non, interdum vitae sem. In hac habitasse platea dictumst. Sed ornare nibh at velit vulputate, sed imperdiet purus blandit. Praesent dapibus dignissim eros, vel faucibus metus varius aliquam.',
      tema:'1',
    },
    {
      _id:'2',  
      autor: 'Francis',  
      titulo: 'Por que os aviões voam',
      postagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet aliquam quam. Cras sit amet libero sed ipsum mattis aliquet. Curabitur nunc leo, fringilla sed sollicitudin at, tempus non enim. Pellentesque luctus dui a ex accumsan tempus. Aliquam erat volutpat. Proin lorem tortor, facilisis non bibendum vitae, sollicitudin in diam. Sed a odio eu ante venenatis mattis non in sem. Mauris luctus elementum molestie. Aenean accumsan nisl mi, semper vehicula erat aliquet vitae. Mauris ornare viverra tempor. Nulla sit amet condimentum ante, eget eleifend dolor. Fusce metus mauris, volutpat nec porta non, interdum vitae sem. In hac habitasse platea dictumst. Sed ornare nibh at velit vulputate, sed imperdiet purus blandit. Praesent dapibus dignissim eros, vel faucibus metus varius aliquam.',
      tema:'2',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
