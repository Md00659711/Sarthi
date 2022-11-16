import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout.component';
import { LogoutRouting } from './logout.routing';
@NgModule({
    declarations:[LogoutComponent],
    imports: [
        CommonModule,
        LogoutRouting,
        
    ],

})
export class LogoutModule { }  