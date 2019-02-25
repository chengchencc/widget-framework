//ngx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { DesignerComponent } from './designer.component';
import { DesignerRoutingModule } from './designer-routing.module';

//common vendors
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
// core
import { CoreModule } from './../core/core.module';

//child component
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ContentComponent } from './shell/content/content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AsideComponent } from './shell/aside/aside.component';
import { SidebarInfoComponent } from './shell/sidebar/sidebar-info/sidebar-info.component';
import { SidebarLayoutComponent } from './shell/sidebar/sidebar-layout/sidebar-layout.component';
import { SidebarWidgetComponent } from './shell/sidebar/sidebar-widget/sidebar-widget.component';
import { DraggableModule } from '../core/dnd/draggable.module';

//services
import { DesignerService } from './services/designer.service';
import { AsideStyleComponent } from './shell/aside/aside-style/aside-style.component';
import { AsideSettingComponent } from './shell/aside/aside-setting/aside-setting.component';
import { AsideStructureComponent, AsideStructureTreeComponent } from './shell/aside/aside-structure/aside-structure.component';
import { AsideEventComponent } from './shell/aside/aside-event/aside-event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignerRoutingModule,
    TabsModule.forRoot(),
    CoreModule,
    DraggableModule,
    NgSelectModule
  ],
  declarations: [
    DesignerComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    SidebarInfoComponent,
    SidebarLayoutComponent,
    SidebarWidgetComponent,
    AsideStyleComponent,
    AsideSettingComponent,
    AsideStructureComponent,
    AsideStructureTreeComponent,
    AsideEventComponent
  ],
  providers:[
    DesignerService
  ]
})
export class DesignerModule { }
