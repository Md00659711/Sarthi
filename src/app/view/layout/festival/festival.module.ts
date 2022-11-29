import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FestivalRoutingModule } from './festival-routing.module';
import { FestivalComponent } from './festival.component';


@NgModule({
  declarations: [FestivalComponent],
  imports: [
    CommonModule,
    FestivalRoutingModule
  ]
})
export class FestivalModule { }
