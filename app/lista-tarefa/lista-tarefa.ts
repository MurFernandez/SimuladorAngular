import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarefaService, Tarefa } from '../tarefaservice';

@Component({
  selector: 'app-lista-tarefa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-tarefa.html',
  styleUrls: ['./lista-tarefa.css']
})
export class ListaTarefaComponent {
  private tarefaService = inject(TarefaService);

  get tarefas(): Tarefa[] {
    return this.tarefaService.listar();
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get concluidas(): number {
    return this.tarefas.filter(t => t.concluida && !t.removida).length;
  }

  get pendentes(): number {
    return this.tarefas.filter(t => !t.concluida && !t.removida).length;
  }

  removerTarefa(id: number): void {
    this.tarefaService.remover(id);
  }

  concluirTarefa(id: number): void {
    this.tarefaService.marcarConcluida(id);
  }
}