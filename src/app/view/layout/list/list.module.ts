import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { ListComponentRouting } from './list.routing';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations:[ListComponent],
    imports: [
        CommonModule,
        ListComponentRouting,
        FormsModule ,
        NgxPaginationModule,
        ModalModule.forRoot(),
    ],
    providers: []
})

export class ListComponentModule { } 