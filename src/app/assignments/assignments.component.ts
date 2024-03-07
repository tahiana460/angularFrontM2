import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective,
      AssignmentDetailComponent, AddAssignmentComponent,
      MatListModule, MatButtonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  titre = "Liste des assignments";
  formVisible = false;

  assignmentSelected:Assignment | undefined;

  assignments:Assignment[] = [];

  // injection service
  constructor(private assignmentsService:AssignmentsService) {}

  getColor(a: any) {
    return a.rendu? 'green' : 'red';
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.boutonActive = true;
    // }, 3000);
    console.log("BEFORE REQUEST");
    this.getAssignmentsFromService();
  }

  getAssignmentsFromService() {
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      console.log("Data arrived");
      this.assignments = assignments;
    });
    console.log("REQUEST SENT");
  }

  assignmentClicked(a: Assignment) {
    console.log("Assignment clicked: ", a.nom);
    this.assignmentSelected = a;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  ajouteAssignment(event: Assignment) {
    // this.assignments.push(event);
    this.assignmentsService.addAssignment(event).subscribe((res) => {
      console.log(res);
      this.formVisible = false;
    })
  }
}