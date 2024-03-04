import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre = "Ceci est un titre xD"
  assignments = [
    {
      nom: "TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: '2020-11-17',
      rendu: true
    },
    {
      nom: "TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)",
      dateDeRendu: '2020-12-15',
      rendu: false
    },
    {
      nom: "TP3 sur Angular",
      dateDeRendu: '2021-01-04',
      rendu: false
    }
  ];
}