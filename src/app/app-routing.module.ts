import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: StudentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }