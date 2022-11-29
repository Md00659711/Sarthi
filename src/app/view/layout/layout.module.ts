import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { LayoutRouting } from './layout.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AssignComponent } from './assign/assign.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { FestivalComponent } from './festival/festival.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingComponent } from './setting/setting.component';
@NgModule({
    declarations:[LayoutComponent,HeaderComponent,SidebarComponent],
    imports: [
        CommonModule,
        LayoutRouting,
        
    
    ],

})
export class LayoutModule { }  