import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/model/pensamento.model';
import { PensamentoService } from 'src/app/servicos/pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento | null = null;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.buscar(id).subscribe((pensamento) => {
      this.pensamento = pensamento
    });
  }

  excluirPensamento() {
    if (!this.pensamento?.id) return;

    this.service.excluir(this.pensamento.id).subscribe((_) => {
      this.router.navigate(['/listar-pensamento']);
    });
  }

  cancelarPensamento() {
    this.router.navigate(['/listar-pensamento']);
  }
}
