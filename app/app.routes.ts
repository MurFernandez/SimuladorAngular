import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastrarTarefaComponent },
  { path: 'lista', component: ListaTarefaComponent }
];