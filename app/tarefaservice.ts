import { Injectable } from '@angular/core';

export interface Tarefa {
  id: number;
  descricao: string;
  prazoConclusao: string;
  concluida: boolean;
  removida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];
  private contadorId = 1;

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(descricao: string, prazoConclusao: string): void {
    this.tarefas.push({
      id: this.contadorId++,
      descricao,
      prazoConclusao,
      concluida: false,
      removida: false
    });
  }

  remover(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.removida = true;
    }
  }

  marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
    }
  }
}