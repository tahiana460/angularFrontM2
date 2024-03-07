import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom: "TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date('2020-11-17'),
      rendu: true
    },
    {
      nom: "TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)",
      dateDeRendu: new Date('2020-12-15'),
      rendu: false
    },
    {
      nom: "TP3 sur Angular, utilisation du router et du Web Services",
      dateDeRendu: new Date('2021-01-04'),
      rendu: false
    }
  ];

  constructor(private logService: LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(a: Assignment): Observable<string> {
    this.assignments.push(a);
    this.logService.log(a.nom, "ajouté");
    return of("Assignment added!");
  }

  updateAssignment(a: Assignment): Observable<string> {
    this.logService.log(a.nom, "modifié");
    return of("Assignment updated!")
  }

  deleteAssignment(a: Assignment): Observable<string> {
    let pos = this.assignments.indexOf(a);
    this.assignments.splice(pos, 1);
    this.logService.log(a.nom, "supprimé");
    return of("Assignment deleted!");
  }
}