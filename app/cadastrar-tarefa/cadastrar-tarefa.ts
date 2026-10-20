import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { TarefaService } from '../tarefaservice';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrls: ['./cadastrar-tarefa.css']
})
export class CadastrarTarefaComponent {
  descricao = '';
  prazo = '';
  
  private tarefaService = inject(TarefaService);
  private router = inject(Router);

  onSubmit(): void {
    if (this.descricao.trim() && this.prazo) {
      this.tarefaService.adicionar(this.descricao, this.prazo);
      this.descricao = '';
      this.prazo = '';
      this.router.navigate(['/lista']);
    }
  }
}