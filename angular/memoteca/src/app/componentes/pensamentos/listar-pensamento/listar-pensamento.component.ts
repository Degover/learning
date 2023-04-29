import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular a',
      autoria: 'Dev',
      modelo: 'modelo3'
    },
    {
      id: '1',
      conteudo: 'Aprendendo Angular a',
      autoria: 'Dev',
      modelo: 'modelo3'
    },
    {
      id: '1',
      conteudo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      autoria: 'Outrem',
      modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
