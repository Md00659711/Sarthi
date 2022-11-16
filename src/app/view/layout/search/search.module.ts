import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchComponentRouting } from './search.routing';

@NgModule({
    declarations:[SearchComponent],
    imports: [
        CommonModule,
        SearchComponentRouting   
    ],

})
export class SearchComponentModule { }  