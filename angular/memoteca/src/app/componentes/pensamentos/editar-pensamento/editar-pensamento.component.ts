import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/model/pensamento.model';
import { PensamentoService } from 'src/app/servicos/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.service.buscar(id).subscribe(pensamento => {
      this.pensamento = pensamento;
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(_ => {
      this.router.navigate(['/listar-pensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }
}
