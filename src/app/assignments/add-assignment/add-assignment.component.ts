import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { Assignment } from './../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, FormsModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  @Output()
  nouvelAssignment = new EventEmitter<Assignment>();

  // Champs formulaire
  nomAssignment:string = '';
  dateDeRendu = undefined;

  onSubmit(event: any) {
    if(this.nomAssignment == '' || this.dateDeRendu === undefined) return;

    console.log("nom assignment", this.nomAssignment);
    console.log("Date de rendu", this.dateDeRendu);

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    // this.assignments.push(nouvelAssignment);
    this.nouvelAssignment.emit(nouvelAssignment);
  }
}