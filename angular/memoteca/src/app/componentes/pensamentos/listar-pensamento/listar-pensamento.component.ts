import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/model/pensamento.model';
import { PensamentoService } from 'src/app/servicos/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
}
