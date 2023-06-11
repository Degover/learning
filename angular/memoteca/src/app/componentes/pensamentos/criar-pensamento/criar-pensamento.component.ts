import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/model/pensamento.model';
import { PensamentoService } from 'src/app/servicos/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1']
    });
  }

  criarPensamento(): void {
    this.service.criar(this.formulario.value).subscribe((pensamento) => {
      this.router.navigate(['/listar-pensamento'])
    });
  }
}
