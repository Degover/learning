import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/model/pensamento.model';
import { PensamentoService } from 'src/app/servicos/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe((pensamento) => {
      this.router.navigate(['/listar-pensamento'])
    });
  }
}
