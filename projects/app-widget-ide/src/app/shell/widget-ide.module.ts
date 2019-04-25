//ngx
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { WidgetIdeComponent } from './widget-ide.component';

//common vendors
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// core
import { WidgetCoreModule } from 'projects/widget-core/src/lib/widget-core.module';
// import { WidgetCoreModule } from 'widget-core';
// import { DraggableModule } from '@widget/core';

//child component
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { SidebarInfoComponent } from './sidebar/sidebar-info/sidebar-info.component';
import { SidebarLayoutComponent } from './sidebar/sidebar-layout/sidebar-layout.component';
import { SidebarWidgetComponent } from './sidebar/sidebar-widget/sidebar-widget.component';

import { AsideStyleComponent } from './aside/aside-style/aside-style.component';
import { AsideSettingComponent } from './aside/aside-setting/aside-setting.component';
import { AsideStructureComponent, AsideStructureTreeComponent } from './aside/aside-structure/aside-structure.component';
import { AsideEventComponent } from './aside/aside-event/aside-event.component';
import { AsideStyleFormListComponent } from './aside/aside-style/aside-style-form-list/aside-style-form-list.component';
import { BoxInputComponent } from './aside/aside-style/box-input/box-input.component';
import { DragInputDirective } from '../directives/drag-input.directive';

//services
import { DesignerService } from '../services/designer.service';

import { Widget_Core_Config_Token, WidgetCoreConfig } from 'projects/widget-core/src/lib/core.config';
import { ToastrModule } from 'ngx-toastr';

// import { OverlayModule } from "@angular/cdk/overlay";

const widgetCoreConfig:WidgetCoreConfig={
  evn:"design",
  widgetManifestUrl:"aaa"
}


@NgModule({
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    WidgetCoreModule,
    // DraggableModule,
    NgSelectModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
      // positionClass: 'toast-bottom-center'
      // positionClass: 'toast-bottom-full-width'
    })
  ],
  declarations: [
    WidgetIdeComponent,
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
    BoxInputComponent,
    DragInputDirective,
  ],
  exports:[
    WidgetIdeComponent
  ],
  providers:[
    DesignerService,
    {provide:Widget_Core_Config_Token,useValue:widgetCoreConfig}

  ],
  bootstrap: [WidgetIdeComponent]

})
export class WidgetIdeModule { }
