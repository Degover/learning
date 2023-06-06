import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listar-pensamento' },
  { path: 'listar-pensamento', component: ListarPensamentoComponent },
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
  { path: 'excluir-pensamento/:id', component: ExcluirPensamentoComponent },
  { path: 'editar-pensamento/:id', component: EditarPensamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
