import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AssignRoutingModule } from './assign-routing.module';
import { AssignComponent } from './assign.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AssignComponent],
  imports: [
    CommonModule,
    AssignRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: []
})
export class AssignModule { }
