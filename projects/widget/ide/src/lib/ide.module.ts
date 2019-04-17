//ngx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { DesignerComponent } from './designer.component';

//common vendors
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgSelectModule } from '@ng-select/ng-select';
// core
import { CoreModule } from '@widget/core';
import { DraggableModule } from '@widget/core';

//child component
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ContentComponent } from './shell/content/content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AsideComponent } from './shell/aside/aside.component';
import { SidebarInfoComponent } from './shell/sidebar/sidebar-info/sidebar-info.component';
import { SidebarLayoutComponent } from './shell/sidebar/sidebar-layout/sidebar-layout.component';
import { SidebarWidgetComponent } from './shell/sidebar/sidebar-widget/sidebar-widget.component';

//services
import { DesignerService } from './services/designer.service';
import { AsideStyleComponent } from './shell/aside/aside-style/aside-style.component';
import { AsideSettingComponent } from './shell/aside/aside-setting/aside-setting.component';
import { AsideStructureComponent, AsideStructureTreeComponent } from './shell/aside/aside-structure/aside-structure.component';
import { AsideEventComponent } from './shell/aside/aside-event/aside-event.component';
import { AsideStyleFormListComponent } from './shell/aside/aside-style-form-list/aside-style-form-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    CoreModule,
    DraggableModule,
    NgSelectModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
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
    AsideEventComponent,
    AsideStyleFormListComponent,
  ],
  providers:[
    DesignerService
  ]
})
export class IdeModule { }
