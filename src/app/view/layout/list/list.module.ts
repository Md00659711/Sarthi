import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { ListComponentRouting } from './list.routing';

@NgModule({
    declarations:[ListComponent],
    imports: [
        CommonModule,
        ListComponentRouting,
        FormsModule 
    ],

})
export class ListComponentModule { } 